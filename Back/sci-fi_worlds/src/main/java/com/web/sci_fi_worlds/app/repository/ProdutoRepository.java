package com.web.sci_fi_worlds.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.web.sci_fi_worlds.app.entity.Produto;

@Repository
public interface ProdutoRepository 
    extends JpaRepository<Produto,Integer> {

    @Query(value="select * from produto where destaque>0 order by destaque", nativeQuery = true)
    public List<Produto> listarVitrine();

    @Query(value="select * from produto where nome like ?1 or descricao like ?1", 
    nativeQuery = true)
    public List<Produto> fazerBusca(String termo);
}
