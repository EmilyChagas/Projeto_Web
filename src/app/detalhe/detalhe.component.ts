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
