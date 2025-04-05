export class Produto{
    public id: number; 
    public nome: string; 
    public descricao: string;
    public des_detalhada: string;
    public preco: number; 
    public img: string; 
    public quant: number;

    constructor(id: number, nome: string, descricao: string, des_detalhada: string, preco: number, img: string, quant: number) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.des_detalhada = des_detalhada;
        this.preco = preco;
        this.img = img;
        this.quant = quant;
    }
}