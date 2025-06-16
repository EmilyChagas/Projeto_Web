package com.web.sci_fi_worlds.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sci_fi_worlds.app.entity.Produto;
import com.web.sci_fi_worlds.app.repository.ProdutoRepository;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {    @Autowired
    ProdutoRepository produtoRepository; 

    @PostMapping("produto")
    public void gravar(@RequestBody Produto obj) {
        produtoRepository.save(obj);
    }

    @PutMapping("produto")
    public void alterar(@RequestBody Produto obj) {
        produtoRepository.save(obj);
    }

    @GetMapping("produto/{id}")
    public Produto carregar(@PathVariable("id") Integer codigo) {
        if(produtoRepository.existsById(codigo)) {
            return produtoRepository.findById(codigo).get();
        } else {
            return new Produto();
        }
    }

    @DeleteMapping("produto/{id}")
    public void apagar(@PathVariable("id") Integer codigo) {
        produtoRepository.deleteById(codigo);
    }

    @GetMapping("produtos")
    public List<Produto> listar() {
        return produtoRepository.findAll();
    }
    
    @GetMapping("produtos/vitrine") 
    public List<Produto> listarVitrine() {
        return produtoRepository.listarVitrine(); 
    }

    @GetMapping("produtos/busca/{termo}")
    public List<Produto> fazerBusca(@PathVariable("termo") String termo) {
        return produtoRepository.fazerBusca("%"+ termo + "%");
    }

}
