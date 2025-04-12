import { Component, OnInit, inject } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { MatDialog } from '@angular/material/dialog';
import { Detalhe } from '../model/detalhe';
@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'], 
  imports: [CommonModule]
})

export class VitrineComponent implements OnInit {
  produtos: Produto[] = [];
  detalhado: Detalhe[] = [];

  constructor() { }

  ngOnInit(): void {
      this.carregarProdutos();
  }

  carregarProdutos(): void {
      this.produtos = [
           {  id: 1,
              nome:"Tatooine", 
              descricao:"Star Wars",
              des_detalhada:"Um planeta desértico icônico, famoso por seus dois sóis e seus vastos mares .  Lar de caçadores de recompensas, comerciantes, contrabandistas e da mítica  Ordem Jedi, Tatooine é o destino perfeito para quem busca aventuras perigosas ou deseja estabelecer um império no submundo galáctico. ", 
              preco: 4999000, 
              img:"Tatooine.png",
              quant:1},
            { id: 2, 
              nome:"Arrakis", 
              descricao:"Duna",
              des_detalhada:"Arrakis é um mundo desértico hostil e inóspito, mas lar do recurso mais valioso do universo: a Especiaria Melange. ", 
              preco: 9999000, 
              img: "Arrakis.png",
              quant: 1},
            { id: 3, 
              nome:"Cybertron", 
              descricao:"Transformers",
              des_detalhada: "Cybertron é um mundo de cidades brilhantes, engrenagens colossais e tecnologia avançada além da compreensão humana.  ", 
              preco: 14900000, 
              img: "Cybertron.png",
              quant: 1},
            { id: 4, 
              nome: "Krypton", 
              descricao: "Superman",
              des_detalhada:"O lendário planeta de origem do Superman, Krypton foi uma civilização avançada, rica em conhecimento, tecnologia e cultura. ", 
              preco: 12500000, 
              img: "Krypton.png",
              quant:1},
       ];
  }

  readonly detalhe = inject(MatDialog);

  OpenDetalhe(detalhado: any):void{
    this.detalhe.open(DetalheComponent, {
      data: detalhado
    });
  }
}
