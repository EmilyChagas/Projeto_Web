import { Component, OnInit, inject } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { MatDialog } from '@angular/material/dialog';
import { Detalhe } from '../model/detalhe';
import { ProdutoService } from '../service/produtos.service';
@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'], 
  imports: [CommonModule]
})

export class VitrineComponent {
  public mensagem:String="";
  public Produto: Produto[] =  [];

  constructor(private service: ProdutoService){
       service.carregarVitrine().subscribe({
        next:(data)=>{
          this.mensagem = "";
          this.Produto = data;
        },
        error:(error)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        }
      });

  }

  readonly detalhe = inject(MatDialog);


public carregar(obj: Produto) {
  this.detalhe.open(DetalheComponent, {
    data: obj
  });
}

}
