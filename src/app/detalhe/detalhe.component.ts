import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Detalhe } from '../model/detalhe';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
@Component({
  selector: 'app-detalhe',
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  public detalhe!: Detalhe;
  public mensagem: String = "";
  constructor(@Inject(MAT_DIALOG_DATA) public produto: Produto) {
    if (!this.produto) {
      this.mensagem = "Produto não encontrado! Verifique.";
    } else{
      this.detalhe = Object.assign(new Detalhe(), this.produto);
      if(this.detalhe.id==1){
      this.detalhe.info1 = "Clima árido e extremo, ideal para sobreviventes resistentes.";
      this.detalhe.info2 = "Povos nativos como os Jawas e os Tuskens garantem uma vida cultural única";
      this.detalhe.info3 = "Ponto estratégico para comércio interestelar (e atividades clandestinas). ";
      this.detalhe.info4 = "Sede da lendária corrida de Pods! ";
      this.detalhe.alerta = "Inclui espaçoporto funcional e negociações com clãs locais. ";
      this.detalhe.final  = "Adquira agora e torne-se o novo senhor de Tatooine!"
      }
      else if(this.detalhe.id==2){
        this.detalhe.info1 = "Promoção Ilimitada!";
        this.detalhe.alerta = "Estoque ilimitado";
      }
    }
  }
}
