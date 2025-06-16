import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cesta } from '../model/cesta';
import { CestaService } from '../service/cesta.service';
import { ClienteService } from '../service/cliente.service';
@Component({
  selector: 'app-pagamento',
  imports: [CommonModule, FormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})
export class PagamentoComponent implements OnInit {
  dadosCartao = {
    numero: '',
    nome: '',
    validade: '',
    cvc: ''
  };

  pedidoProcessado = false;
  dadosPedido: any = null;
  cesta: Cesta = new Cesta();
  valorFrete: number = 20;
  mensagem: string = '';

  constructor(
    private CestaService: CestaService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private Cliente: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregarCesta();
  }

  carregarCesta(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cestaJson = localStorage.getItem('cesta');
      if (cestaJson) {
        this.cesta = JSON.parse(cestaJson);
        this.cesta.total = this.CestaService.calcularTotal(this.cesta);
      } else {
        this.mensagem = 'Cesta vazia. Adicione produtos antes de pagar.';
      }
    }
  }

  processarPagamento(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.gerarDadosPedido();
        this.limparCesta();
        this.pedidoProcessado = true;
      }, 100);
    }

  }

  private gerarDadosPedido(): void {
    this.dadosPedido = {
      numeroPedido: 'PED' + Math.floor(Math.random() * 1000000),
      dataPedido: new Date().toLocaleDateString('pt-BR'),
      dataEntrega: this.calcularDataEntrega(),
      cliente: this.cesta.cliente,
      itens: this.cesta.itens,
      subtotal: this.cesta.total,
      frete: this.valorFrete,
      total: this.cesta.total + this.valorFrete
    };
  }

  private calcularDataEntrega(): string {
    const data = new Date();
    data.setDate(data.getDate() + 30);
    return data.toLocaleDateString('pt-BR');
  }

  private limparCesta(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cesta');
    }
    this.cesta = new Cesta();
  }

  voltarParaLoja() {
     location.href = "Produtos";
  }
}
