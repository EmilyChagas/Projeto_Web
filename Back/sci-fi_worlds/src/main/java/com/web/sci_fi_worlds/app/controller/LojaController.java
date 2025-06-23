package com.web.sci_fi_worlds.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.sci_fi_worlds.app.service.LojaService;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class LojaController {
    @Autowired
    private LojaService lojaService;
    @PostMapping("/recuperacao-senha")
   public ResponseEntity<String> recuperarSenha(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String assunto = "Recuperação de Senha - Sci-Fi Worlds";
        String corpo = "Olá,\n\nClique para resetar sua senha: [LINK]\n\nAtenciosamente,\nEquipe Sci-Fi Worlds";
        
        String resultado = lojaService.enviarEmail(email, assunto, corpo);
        
        if(resultado.isEmpty()) {
            return ResponseEntity.ok("E-mail enviado com sucesso");
        }
        return ResponseEntity.badRequest().body(resultado);
    }
}