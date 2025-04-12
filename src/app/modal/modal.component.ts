import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
    produtos: Produto[] = [];
    valorFrete: number = 2000;
  
    constructor() { }
  
    ngOnInit(): void {
        this.carregarProdutos();
    }
  
    carregarProdutos(): void {
        this.produtos = [
          { id: 1,
            nome:"Tatooine", 
            descricao:"Star Wars",
            des_detalhada:"Um planeta desértico icônico, famoso por seus dois sóis e seus vastos mares .  Lar de caçadores de recompensas, comerciantes, contrabandistas e da mítica  Ordem Jedi, Tatooine é o destino perfeito para quem busca aventuras perigosas ou deseja estabelecer um império no submundo galáctico. ", 
            preco: 4999000, 
            img:"Tatooine.png",
            quant:1}
          ];
    }   
    
    get totalPedido(): number {
      return this.produtos.reduce((total, produto) => {
        return total + produto.preco * produto.quant;
      }, 0);
    }
      aumentar(produt: Produto) {
        produt.quant++; 
      }
    diminuir(produt: Produto) {
        if (produt.quant > 0) { 
            produt.quant--;
        }
    }

    get frete(): number{
      return this.valorFrete;
    }

    get totalComFrete(): number {
      return this.totalPedido + this.valorFrete;
    }
}
