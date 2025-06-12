package com.web.sci_fi_worlds.app.entity;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Cesta {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    private int codigo;
    private int codigoCliente;
    @Transient
    private Cliente cliente;
    @Transient
    private List<ItemCesta> itens;
    private double valor;
    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getCodigoCliente() {
        return codigoCliente;
    }
    public void setCodigoCliente(int codigoCliente) {
        this.codigoCliente = codigoCliente;
    }
    public Cliente getCliente() {
        return cliente;
    }
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
    public List<ItemCesta> getItens() {
        return itens;
    }
    public void setItens(List<ItemCesta> itens) {
        this.itens = itens;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }  

}