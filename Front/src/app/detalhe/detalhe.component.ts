import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Detalhe } from '../model/detalhe';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Cesta } from '../model/cesta';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
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
        this.detalhe.info1 = "Fonte exclusiva da Especiaria, essencial para viagens interestelares e longevidade.";
        this.detalhe.info2 = "Ambiente extremo, com temperaturas escaldantes e escassez de água. ";
        this.detalhe.info3 = "Habitantes Fremen – guerreiros lendários e mestres da sobrevivência no deserto. ";
        this.detalhe.info4 = "Lar dos colossais Vermes da Areia, uma ameaça e uma oportunidade para quem souber domá-los.  ";
        this.detalhe.alerta = "A aquisição pode atrair o olhar atento da Casa Imperial e da Guilda Espacial.";
        this.detalhe.final  = " Compre agora e controle o recurso mais valioso da galáxia"
      }
      else if(this.detalhe.id==3){
        this.detalhe.info1 = "Estruturas e paisagens inteiramente metálicas e mecanizadas.";
        this.detalhe.info2 = "Centro de inteligência cibernética e lar de inúmeras formas de vida robóticas. ";
        this.detalhe.info3 = "Pontos icônicos como Iacon, Kaon e a câmara do AllSpark.";
        this.detalhe.info4 = "Tecnologia e infraestrutura capazes de evoluir e se reconstruir. ";
        this.detalhe.alerta = "Conflitos internos constantes. Escolha seu lado com sabedoria.";
        this.detalhe.final  = " Adquira agora e domine a maior civilização mecânica do universo! Seus recursos é frequentemente a motivação ou origem das guerras épicas dos Transformers. "
      }
      else if(this.detalhe.id==4){
        this.detalhe.info1 = "Arquitetura cristalina e tecnologia muito à frente de qualquer outra civilização.";
        this.detalhe.info2 = "Atmosfera densa e um sol vermelho, fornecendo condições únicas de vida.";
        this.detalhe.info3 = "Sociedade altamente organizada, dividida em clãs e casas nobres. ";
        this.detalhe.info4 = "Recursos naturais raros, como Kryptonita, que pode ter efeitos curiosos em visitantes alienígenas. ";
        this.detalhe.alerta = "A estabilidade geológica ainda é incerta. Seguro contra explosões planetárias altamente recomendado. ";
        this.detalhe.final  = "Adquira agora e traga Krypton de volta à glória!  "
      }
      else if(this.detalhe.id==5){
        this.detalhe.info1 = "Um mundo repleto de magia, deuses temperamentais e leis físicas questionáveis. ";
        this.detalhe.info2 = "Cidades icônicas como Ankh-Morpork, onde política e crime são praticamente a mesma coisa. ";
        this.detalhe.info3 = "A presença recorrente da própria Morte (ele é gente boa, só um pouco soturno). ";
        this.detalhe.info4 = "Possibilidade de encontros com bruxas, trolls, vampiros, bibliotecários orangotangos e viajantes imprudentes.";
        this.detalhe.alerta = "Efeitos colaterais da magia podem incluir mudanças na realidade e visitas inesperadas de Rincewind. ";
        this.detalhe.final  = " Compre agora e torne-se parte da maior sátira do multiverso!"
      }
      else if(this.detalhe.id==6){
        this.detalhe.info1 = "Lar dos Guardiões do Universo, seres imortais de vasto conhecimento.";
        this.detalhe.info2 = "A fonte da Bateria Central, que alimenta os anéis dos Lanternas Verdes. ";
        this.detalhe.info3 = "Arquitetura cósmica impressionante, com vastas torres e tecnologia avançada.";
        this.detalhe.info4 = "Ponto estratégico com acesso a todos os setores do universo. ";
        this.detalhe.alerta = "Presença de Lanternas Verdes pode dificultar tentativas de domínio absoluto. ";
        this.detalhe.final  = "Garanta agora sua posição no centro do universo e molde o destino cósmico!  "
      }
      else if(this.detalhe.id==7){
        this.detalhe.info1 = "Ambiente montanhoso e vastas paisagens, com um céu que muda constantemente devido ao controle temporal.";
        this.detalhe.info2 = "Lar dos Senhores do Tempo, seres imortais que governam o fluxo do tempo e viajam por diferentes épocas. ";
        this.detalhe.info3 = "A presença de TARDIS, as naves espaciais que podem viajar através do tempo e do espaço. ";
        this.detalhe.info4 = "Cultura altamente avançada em manipulação temporal, viagem interdimensional e tecnologias que desafiam as leis da física.";
        this.detalhe.alerta = "A aquisição pode atrair a atenção do Senhor Supremo ou de outros Senhores do Tempo. Prepare-se para desafios inesperados.";
        this.detalhe.final  = " Compre agora e controle o próprio fluxo do tempo! "
      }
      else if(this.detalhe.id==8){
        this.detalhe.info1 = "Terreno montanhoso e vulcânico, com vastas erupções e paisagens dramáticas. ";
        this.detalhe.info2 = "Lar do renomado Surak, filósofo que estabeleceu o código de lógica Vulcana.";
        this.detalhe.info3 = "Sociedade focada em autossuperação e controle emocional, com grande ênfase na meditação e no estudo.";
        this.detalhe.info4 = "Uma cultura que valoriza o conhecimento profundo das ciências e da tecnologia. ";
        this.detalhe.alerta = "Visitas emocionais podem ser desencorajadas. Prepare-se para a maior demonstração de disciplina de sua vida.";
        this.detalhe.final  = " Adquira agora e adentre o mundo onde a razão é a única lei! "
      }
    }
  }

  mostrarTexto = false;

  toggleTexto(): void {
    this.mostrarTexto = !this.mostrarTexto;
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
