import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import {MatDialog} from '@angular/material/dialog'
import { ModalComponent } from './modal/modal.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetoWeb';
  isSearchVisible = false; 

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; 
  }

  readonly carrinho = inject (MatDialog);
  OpenCarrinho():void{
    this.carrinho.open(ModalComponent);
  }
}