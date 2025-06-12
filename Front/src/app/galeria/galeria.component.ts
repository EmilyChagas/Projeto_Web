import { Component, inject, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { DetalheComponent } from '../detalhe/detalhe.component';
import { MatDialog } from '@angular/material/dialog';
import { Cesta } from '../model/cesta';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule,],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit{
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
      estoque: 1000},    
      { id: 5,
        nome:"Discworld", 
        descricao:"Discworld",
        des_detalhada:"Diferente de qualquer outro planeta, Discworld não é uma esfera flutuando no espaço, mas um vasto mundo plano, apoiado sobre as costas de quatro elefantes gigantes, que por sua vez estão equilibrados sobre a Grande A’Tuin, uma tartaruga colossal viajando pelo cosmos. Um reino de magia, caos e humor, este mundo é perfeito para aqueles que buscam aventura (ou apenas um bom chá com os magos da Universidade Invisível).  ", 
        preco:  6666000, 
        img:"Discworld.png",
        quant:1,
        estoque: 1000},
      { id: 6, 
        nome:"Oa", 
        descricao:"Lanterna Verde",
        des_detalhada:"Oa não é apenas um planeta, mas o coração da ordem intergaláctica, lar dos lendários Guardiões do Universo e sede da Tropa dos Lanternas Verdes. Localizado no centro do cosmos, este mundo irradiando energia cósmica é o epicentro da lei e da ordem universal, sendo um dos locais mais poderosos e misteriosos da existência. ", 
        preco:  19999000, 
        img: "Oa.png",
        quant: 1,
        estoque: 1000},
      { id: 7, 
        nome:"Gallifrey", 
        descricao:"Doctor Who",
        des_detalhada: "Gallifrey é o lar dos Senhores do Tempo, uma civilização de viajantes do tempo com conhecimento infinito sobre o universo. Situado em uma galáxia distante, este planeta extraordinário é cercado por mistério e poder, e sua capital, Citadel, é um centro de sabedoria e autoridade cósmica. Se você busca um lugar onde o tempo não tem limites e a história se desdobra em infinitas possibilidades, Gallifrey é o destino ideal. ", 
        preco:  25000000, 
        img: "Gallifrey.png",
        quant: 1,
        estoque: 1000},
      { id: 8, 
        nome: "Vulcano", 
        descricao: "Star Trek",
        des_detalhada:"Vulcano é o planeta natal dos Vulcanos, uma raça conhecida por sua lógica rigorosa e disciplina implacável. Com um ambiente vulcânico e um povo que rejeita a emoção em favor da razão, Vulcano é o local perfeito para aqueles que buscam uma civilização baseada na filosofia, na ciência e na introspecção. Aqui, cada pensamento é meticulosamente ponderado, e cada ação é executada com precisão. ", 
        preco:  8500000 , 
        img: "Vulcano.png",
        quant:1,
        estoque: 1000},
    ]
  
      termoBuscado: string = '';

      constructor(private route: ActivatedRoute) {}
    
      ngOnInit() {
        this.route.queryParams.subscribe(params => {
          this.termoBuscado = params['search'] || '';
          console.log('', this.termoBuscado);
        });
      }
  
  readonly detalhe = inject(MatDialog);
  public carregar(obj: Produto) {
    this.detalhe.open(DetalheComponent, {
      data: obj
    });
  }

  readonly carrinho = inject (MatDialog);
  
  public comprar(obj: Produto){
    let temp = new Cesta();
    let json = localStorage.getItem("cesta");
    if(json!=null) temp = JSON.parse(json);
    const produtoExistente = temp.itens.find((item: Produto) => item.id === obj.id);
    if (produtoExistente) produtoExistente.quant += obj.quant || 1;
    else {if (!obj.quant || obj.quant <= 0) obj.quant = 1;  temp.itens.push(obj)};
    localStorage.setItem("cesta", JSON.stringify(temp));
    this.carrinho.open(ModalComponent);
  }
}
