import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  public mensagem: string = "";
  public obj: Cliente = new Cliente(); 

  public constructor(
    private service: ClienteService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const json = localStorage.getItem("cliente");
      if (json == null) {
        this.mensagem = "Olá, " + this.obj.nome;
      } else {
        this.obj = JSON.parse(json);
      }
    }
  }

    ngOnInit(): void {
    this.carregarDadosCliente();
  }

  private carregarDadosCliente(): void {
    if (isPlatformBrowser(this.platformId)) {
      const clienteStorage = localStorage.getItem("cliente");
      
      if (clienteStorage) {
        try {
          this.obj = JSON.parse(clienteStorage);
        } catch (e) {
          console.error('Erro ao parsear dados do cliente:', e);
          this.mensagem = "Erro ao carregar seus dados. Por favor, faça login novamente.";
        }
      } else {
        this.mensagem = "Por favor, faça login para acessar seu perfil.";
      }
    }
  }   
  public alterar() {
    this.service.alterar(this.obj).subscribe({
      next: (data) => {
        this.mensagem = "Cliente atualizado com sucesso!";
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem("cliente", JSON.stringify(this.obj));
        }
      },
      error: (error) => {
        this.mensagem = "Ocorreu um erro, tente mais tarde!";
      } 
    });
  }

  public limpar() {
    this.obj.codigo = 0;
    this.obj.nome = "";
    this.obj.email = "";
    this.obj.telefone = "";
    this.obj.senha = "";
  }

  public remover() {
    this.service.apagar(this.obj).subscribe({
      next: (data) => {
        this.limpar();
        this.mensagem = "Cliente removido com sucesso!";
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem("cliente");
        }
      setTimeout(() => {
            location.href = "Login";
        }, 1000);
      },
      error: (error) => {
        this.mensagem = "Ocorreu um erro, tente mais tarde!";
      } 
    });
  }

  public fazerLogout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("cliente");
    }
    this.mensagem = "Logout realizado com sucesso!";
    location.href = "";
  }
}