import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'], 
  imports: [CommonModule]
})

export class VitrineComponent implements OnInit {
  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
      this.carregarProdutos();
  }

  carregarProdutos(): void {
      this.produtos = [
          new Produto(1, 
            "Tatooine", 
            "Star Wars",
            "Um planeta desértico icônico, famoso por seus dois sóis e seus vastos mares .  Lar de caçadores de recompensas, comerciantes, contrabandistas e da mítica  Ordem Jedi, Tatooine é o destino perfeito para quem busca aventuras perigosas ou deseja estabelecer um império no submundo galáctico. ", 
            4999000, 
            "Tatooine.png"),
       ];
  }
}
