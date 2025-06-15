import { Component, ViewChild, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public constructor(private router: Router,private service: ClienteService, @Inject(PLATFORM_ID) private platformId: Object){
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      let json = localStorage.getItem("cliente");
      if(json==null){
        this.mensagem = "Você ainda não tem cadastro!!!";
      } else {
        this.obj = JSON.parse(json);
      } 
    }
}
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
    this.service.fazerLogin(this.obj).subscribe({
       next:(data)=>{
        if(data.codigo==0){
          this.mensagem = "Email ou senha invalidos!!!";
        } else {
          localStorage.setItem("cliente", JSON.stringify(data));
          this.mensagem = "Bem vindo!";
            setTimeout(() => {
              this.router.navigate(['Perfil']); 
            }, 1000);
          }
        },
        error:(error)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        } 
    });
  }

  public gravar(){
    this.service.gravar(this.obj).subscribe({
       next:(data)=>{
          this.mensagem = "Cliente cadastrado com sucesso!";
              setTimeout(() => {
              this.container.nativeElement.classList.remove("right-panel-active");
              this.mensagem = "Faça seu login!";
            }, 1000);
        },
        error:(error)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        } 
    });
  }


  public alterar(){
   this.service.alterar(this.obj).subscribe({
       next:(data)=>{
          this.mensagem = "Cliente atualizado com sucesso!";
        },
        error:(error)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        } 
    });
 }

 public limpar(){
  this.obj.codigo = 0;
  this.obj.nome = "";
  this.obj.email = "";
  this.obj.telefone = "";
 }

 public remover(){
    this.service.apagar(this.obj).subscribe({
       next:(data)=>{
          this.limpar();
          this.mensagem = "Cliente removido com sucesso!";
        },
        error:(error)=>{
          this.mensagem = "Ocorreu um erro, tente mais tarde!";
        } 
    });
}
}

