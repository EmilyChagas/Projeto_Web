import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }

  public gravar(obj: Cliente) : Observable<any>{
    return this.http.post("http://localhost:8080/api/cliente", obj);
  }

  public alterar(obj: Cliente) : Observable<any>{
    return this.http.put("http://localhost:8080/api/cliente", obj);
  }

  public apagar(obj: Cliente) : Observable<any>{
    return this.http.delete("http://localhost:8080/api/cliente/"+ obj.codigo);
  }

  public carregar(obj: Cliente) : Observable<any>{
    return this.http.get("http://localhost:8080/api/cliente/"+ obj.codigo);
  }

  public fazerLogin(obj: Cliente) : Observable<any>{
    return this.http.post("http://localhost:8080/api/cliente/login", obj);
  }



}
