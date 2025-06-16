import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

export const routes: Routes = [
    {path:"",component:VitrineComponent},
    {path:"Carrinho", component:ModalComponent},
    {path: "Login", component:LoginComponent},
    {path: "Produtos", component:GaleriaComponent},
    {path:"Perfil", component:PerfilComponent},
    {path:"Pagar", component:PagamentoComponent}
];
