import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Detalhe } from '../model/detalhe';
@Component({
  selector: 'app-detalhe',
  imports: [],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: Detalhe) {}

}
