import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { ProdutoService } from '../service/produtos.service';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-pesquisa',
  imports: [CommonModule, FormsModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent {
  public mensagem: string = "";
  public lista: Produto[] = [];
  public termoBusca: string = "";

  constructor(
    private service: ProdutoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.carregarTermoBusca();
  }

  private carregarTermoBusca(): void {
    if (isPlatformBrowser(this.platformId)) {
      const json = localStorage.getItem("termoBusca");
      if (json !== null) {
        this.termoBusca = json;
        this.service.fazerBusca(this.termoBusca).subscribe({
          next: (data) => {
            this.mensagem = "";
            this.lista = data;
          },
          error: (error) => {
            this.mensagem = "Ocorreu um erro, tente mais tarde!";
          }
        });
      } else {
        this.mensagem = "Termo de busca não definido!";
      }
    }
  }

  readonly detalhe = inject(MatDialog);
  
  public carregar(obj: Produto): void {
    this.detalhe.open(DetalheComponent, {
      data: obj
    });
  }

  readonly carrinho = inject(MatDialog);
  
  public comprar(obj: Produto): void {
    if (isPlatformBrowser(this.platformId)) {
      let temp = new Cesta();
      const json = localStorage.getItem("cesta");
      if (json !== null) {
        temp = JSON.parse(json);
      }
      const produtoExistente = temp.itens.find((item: Produto) => item.id === obj.id);
      if (produtoExistente) {
        produtoExistente.quant += obj.quant || 1;
      } else {
        if (!obj.quant || obj.quant <= 0) {
          obj.quant = 1;
        }
        temp.itens.push(obj);
      }
      localStorage.setItem("cesta", JSON.stringify(temp));
      this.carrinho.open(ModalComponent);
    }
  }
}

