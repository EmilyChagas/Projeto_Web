import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
    // produtos: Produto[] = [];
    valorFrete: number = 2000;
  
    public mensagem: String = "";
    public produto: Cesta = new Cesta();
  
    constructor(){
        let json = localStorage.getItem("cesta");
        if(json==null){
          this.mensagem = "Cesta vazia, verifique!";
        } else {
          this.produto = JSON.parse(json);
        }
    }

  limparCesta(produto:Produto){
    let temp = new Cesta();
    let json = localStorage.getItem("cesta");
  
    if (json != null) { temp = JSON.parse(json);
      temp.itens = temp.itens.filter((item: Produto) => item.id !== produto.id);
      localStorage.setItem("cesta", JSON.stringify(temp));
      this.produto = temp;
    }
  }
  
    
  get totalPedido(): number {
    if (!this.produto || !this.produto.itens || this.produto.itens.length === 0) {
      return 0;
    }

    return this.produto.itens.reduce((total: number, produto: Produto) => {
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
