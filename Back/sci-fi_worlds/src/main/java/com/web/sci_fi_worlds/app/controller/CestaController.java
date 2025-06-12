package com.web.sci_fi_worlds.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sci_fi_worlds.app.entity.Cesta;
import com.web.sci_fi_worlds.app.entity.ItemCesta;
import com.web.sci_fi_worlds.app.repository.CestaRepository;
import com.web.sci_fi_worlds.app.repository.ItemCestaRepository;




@RestController
@CrossOrigin(origins = "*")
public class CestaController {
    @Autowired
    CestaRepository bd;
    @Autowired
    ItemCestaRepository bdItem;

    @PostMapping("cesta")
    public void gravar(@RequestBody Cesta obj){
        obj.setCodigoCliente(obj.getCliente().getCodigo());
        bd.save(obj);
        for(ItemCesta objP: obj.getItens()){
            ItemCesta item = new ItemCesta();
            item.setCodigoCesta(obj.getCodigo());
            bdItem.save(item);
        }
    }
    @GetMapping("cesta/{id}")
    public Cesta carregar(@PathVariable("id") Integer codigo){
        if(bd.existsById(codigo)){
            Cesta obj = bd.findById(codigo).get();
            obj.setItens(bdItem.carregarItens(codigo));
            return obj;
        } else {
            return new Cesta();
        }
    }
    @DeleteMapping("cesta/{id}") 
    public void remover(@PathVariable("id") Integer codigo){
        bd.deleteById(codigo);
        bdItem.deleteAllInBatch(bdItem.carregarItens(codigo));
    }

}
