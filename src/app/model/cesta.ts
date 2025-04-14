import { Produto } from "./produto";
import { Cliente } from "./cliente";

export class Cesta {
    public quant: number=0;
    public cliente: Cliente = new Cliente();
    public itens: Produto[] = [];
    public total: number=0;
}
