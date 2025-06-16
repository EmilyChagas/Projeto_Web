import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cesta } from '../model/cesta';
@Injectable({
  providedIn: 'root'
})
export class CestaService {

  private apiUrl = 'http://localhost:8080/cesta'; 

  constructor(private http: HttpClient) { }
salvarCesta(cesta: Cesta): Observable<any> {
    return this.http.post(this.apiUrl, cesta);
}
  carregarCesta(id: number): Observable<Cesta> {
    return this.http.get<Cesta>(`${this.apiUrl}/${id}`);
  }

  removerCesta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private prepararDadosParaBackend(cesta: Cesta): any {
    return {
      cliente: {
        codigo: cesta.cliente.codigo
      },
      itens: cesta.itens.map(item => ({
        produto: {
          id: item.id
        },
        quantidade: item.quant
      }))
    };
  }

  calcularTotal(cesta: Cesta): number {
    if (!cesta.itens) return 0;
    return cesta.itens.reduce((total, item) => total + (item.preco * item.quant), 0);
  }
}
