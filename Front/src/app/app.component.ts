import { Component, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import {MatDialog} from '@angular/material/dialog'
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, MatButtonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetoWeb';
  isSearchVisible = false;
  isMenuOpen = false;
  searchTerm: string = '';
  public termoBusca : string = "";

  fazerBuscar(){
      localStorage.setItem("termoBusca", this.termoBusca);
      location.href = "Busca";
  }
  constructor(private router: Router) {}

  search() {
    const trimmed = this.searchTerm.trim();

    if (trimmed) {
      this.router.navigate(['/Produtos'], {
        queryParams: { search: trimmed }
      });
    } else {
      this.router.navigate(['/Produtos']);
    }

    this.searchTerm = '';
  }


  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  readonly carrinho = inject (MatDialog);
  OpenCarrinho():void{
    this.carrinho.open(ModalComponent);
  }

}