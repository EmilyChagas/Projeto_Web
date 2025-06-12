package com.web.sci_fi_worlds.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sci_fi_worlds.app.entity.Cliente;
import com.web.sci_fi_worlds.app.repository.ClienteRepository;


@RestController
@CrossOrigin(origins = "*")
public class ClienteController {
    @Autowired
    ClienteRepository bd;

    //post - inserir, get - ler, put-alterar, delete-apagar
    @PostMapping("api/cliente")
    public void gravar(@RequestBody Cliente obj){
        bd.save(obj);
    }

    @GetMapping("api/clientes")
    public List<Cliente> listar(){
        return bd.findAll();
    }

    @PutMapping("api/cliente")
    public void alterar(@RequestBody Cliente obj){
        
            bd.save(obj);
            
    }

    @DeleteMapping("api/cliente/{codigo}")
    public void apagar(@PathVariable("codigo") Integer codigo){
       
            bd.deleteById(codigo);
            
    }

    @GetMapping("api/cliente/{codigo}")
    public Cliente carregar(@PathVariable("codigo") Integer codigo){
        if(bd.existsById(codigo)){
            return bd.findById(codigo).get();
        } else {
            return new Cliente();
        }
    }

    @PostMapping("api/cliente/login")
    public Cliente fazerLogin(@RequestBody Cliente obj){
        Optional<Cliente> retorno = bd.fazerLogin(obj.getEmail(), obj.getSenha());
        if(retorno.isPresent()){
            return retorno.get();
        } else {
            return new Cliente();
        }
    }

}
