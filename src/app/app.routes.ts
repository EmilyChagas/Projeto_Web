import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"",component:VitrineComponent},
    {path:"Carrinho", component:ModalComponent},
    {path: "Login", component:LoginComponent}
];
