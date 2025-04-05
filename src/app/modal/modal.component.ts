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
              "Tatooine.png",1),            
            new Produto(2, 
              "Arrakis", 
              "Duna",
              "Arrakis é um mundo desértico hostil e inóspito, mas lar do recurso mais valioso do universo: a Especiaria Melange. ", 
              9999000, 
              "Arrakis.png",1),
            new Produto(3, 
                "Cybertron", 
                "Transformers",
                "Cybertron é um mundo de cidades brilhantes, engrenagens colossais e tecnologia avançada além da compreensão humana.  ", 
                14900000, 
                "Cybertron.png",1),
            new Produto(4, 
                  "Krypton", 
                  "Superman",
                  "O lendário planeta de origem do Superman, Krypton foi uma civilização avançada, rica em conhecimento, tecnologia e cultura. ", 
                  12500000, 
                  "Krypton.png",1),
         ]; 
    }   

      aumentar(produt: Produto) {
        produt.quant++; 
      }
    diminuir(produt: Produto) {
        if (produt.quant > 0) { 
            produt.quant--;
        }
    }
}
