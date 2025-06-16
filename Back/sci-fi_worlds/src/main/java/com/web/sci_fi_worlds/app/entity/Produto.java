package com.web.sci_fi_worlds.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private String nome;
    private String descricao;
    private double preco;
    private int estoque;
    private String des_detalhada;
    private String img;
    private int destaque;
    
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public double getPreco() {
        return preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }
    public int getestoque() {
        return estoque;
    }
    public void setestoque(int estoque) {
        this.estoque = estoque;
    }
        public String getDes_detalhada() {
        return des_detalhada;
    }
    public void setDes_detalhada(String des_detalhada) {
        this.des_detalhada = des_detalhada;
    }
        public String getImg() {
        return img;
    }
    public void setImg(String img) {
        this.img = img;
    }
        public int getDestaque() {
        return destaque;
    }
    public void setDestaque(int destaque) {
        this.destaque = destaque;
    }
}
