import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient, private authSvc: AuthService) {}

  getAll() {
    return this.http.get<Client[]>(`${environment.URI}client`, {
      headers: this.authSvc.getHeader(),
    });
  }

  getById(id: string) {
    return this.http.get<Client>(`${environment.URI}client/${id}`, {
      headers: this.authSvc.getHeader(),
    });
  }

  create(client: Client) {
    return this.http.post<Client>(`${environment.URI}client`, client, {
      headers: this.authSvc.getHeader(),
    });
  }

  update(client: Client) {
    return this.http.put<Client>(`${environment.URI}client`, client, {
      headers: this.authSvc.getHeader(),
    });
  }

  delete(id: number) {
    return this.http.delete(`${environment.URI}client/${id}`, {
      headers: this.authSvc.getHeader(),
    });
  }
}
