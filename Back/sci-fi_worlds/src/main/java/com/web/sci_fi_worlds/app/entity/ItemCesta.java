package com.web.sci_fi_worlds.app.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ItemCesta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private int codigoCesta;
    private int codigoProduto;
    private int quantidade;
    private double valor;
    
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getCodigoCesta() {
        return codigoCesta;
    }
    public void setCodigoCesta(int codigoCesta) {
        this.codigoCesta = codigoCesta;
    }
    public int getCodigoProduto() {
        return codigoProduto;
    }
    public void setCodigoProduto(int codigoProduto) {
        this.codigoProduto = codigoProduto;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
    
}
