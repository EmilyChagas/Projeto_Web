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

export class VitrineComponent {
  produtos: Produto[] = [ 
  { id: 1,
    nome:"Tatooine", 
    descricao:"Star Wars",
    des_detalhada:"Um planeta desértico icônico, famoso por seus dois sóis e seus vastos mares .  Lar de caçadores de recompensas, comerciantes, contrabandistas e da mítica  Ordem Jedi, Tatooine é o destino perfeito para quem busca aventuras perigosas ou deseja estabelecer um império no submundo galáctico. ", 
    preco: 4999000, 
    img:"Tatooine.png",
    quant:1,
    estoque: 1000},
  { id: 2, 
    nome:"Arrakis", 
    descricao:"Duna",
    des_detalhada:"Arrakis é um mundo desértico hostil e inóspito, mas lar do recurso mais valioso do universo: a Especiaria Melange. Governar Arrakis significa ter influência sobre impérios inteiros, mas cuidado tempestades de areia devastadoras e os gigantescos vermes da areia garantem que apenas os mais fortes sobrevivam. ", 
    preco: 9999000, 
    img: "Arrakis.png",
    quant: 1,
    estoque: 1000},
  { id: 3, 
    nome:"Cybertron", 
    descricao:"Transformers",
    des_detalhada: "Cybertron é um mundo de cidades brilhantes, engrenagens colossais e tecnologia avançada além da compreensão humana.  Se você busca um império tecnológico ou quer se tornar parte da história dos Transformers, esta é sua chance! ", 
    preco: 14900000, 
    img: "Cybertron.png",
    quant: 1,
    estoque: 1000},
  { id: 4, 
    nome: "Krypton", 
    descricao: "Superman",
    des_detalhada:"O lendário planeta de origem do Superman, Krypton foi uma civilização avançada, rica em conhecimento, tecnologia e cultura. Antes de sua destruição, era lar de uma sociedade altamente desenvolvida, governada pela razão e pela ciência. Agora, graças à tecnologia de restauração planetária, você tem a chance de possuir e reconstruir Krypton – ou garantir que ele nunca seja destruído desta vez.", 
    preco: 12500000, 
    img: "Krypton.png",
    quant:1,
    estoque: 1000},]

  constructor() { }

  readonly detalhe = inject(MatDialog);


public carregar(obj: Produto) {
  this.detalhe.open(DetalheComponent, {
    data: obj
  });
}

}
