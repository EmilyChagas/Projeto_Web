import { Component, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  onLoginClick(): void {
    this.container.nativeElement.classList.remove("right-panel-active");
  }
  
  onRegisterClick(): void {
    this.container.nativeElement.classList.add("right-panel-active");
  }

  public mensagem : String = "";
  public obj: Cliente = new Cliente();

  public fazerLogin(){
    let json = localStorage.getItem("cliente");
    if(json==null){
      this.mensagem = "Cadastro do cliente não existe!";
    } else {
      let objAux = JSON.parse(json);
      if(objAux.email == this.obj.email && 
        objAux.senha== this.obj.senha){
          this.mensagem = "Bem vindo, "+ objAux.nome;
          setTimeout(() => {
            this.router.navigate(['']); 
          }, 1000);
      } else {
          this.mensagem = "Email ou senha invalidos verifique!";
          setTimeout(() => {
            this.mensagem = "";
          }, 2000);
      }
    }
  }

  public gravar(){
    console.log(this.obj);
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    this.mensagem = "Cliente atualizado com sucesso!";
    setTimeout(() => {
      this.container.nativeElement.classList.remove("right-panel-active");
      this.mensagem = "Faça seu login!";
    }, 1000);
  }
}

