package com.web.sci_fi_worlds.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class LojaService {
    @Autowired
    private JavaMailSender mail;
 
    public String enviarEmail(String to, String assunto, String corpo){
        try{
            SimpleMailMessage mensagem = new SimpleMailMessage();
            mensagem.setFrom("scifiworlds6.1.6@gmail.com");
            mensagem.setTo(to);
            mensagem.setSubject(assunto);
            mensagem.setText(corpo);
            mail.send(mensagem);
            return "";
        }
        catch(Exception err){
            return "Ocorreu um erro durante o envio do email !" + err.getMessage();
        }
    }
}