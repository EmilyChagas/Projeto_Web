import { Produto } from "./produto"

export class Detalhe extends Produto {

        override id: number = 0;
        override nome: string = "";
        override descricao: string = "";
        override des_detalhada: string = "";
        override preco: number= 0; 
        override img: string = "";
        override quant: number= 0;
        info: string = "";
        adicional: string = "";
        alerta:string = "";

}