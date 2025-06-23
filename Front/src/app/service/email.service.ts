import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8080/api/email/recuperacao-senha';

  constructor(private http: HttpClient) { }

  enviarEmailRecuperacao(email: string) {
    return this.http.post(this.apiUrl, { email }, {
      responseType: 'text'
    });
  }
}
