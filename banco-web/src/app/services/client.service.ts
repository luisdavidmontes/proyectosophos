import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Client[]>(`${environment.URI}client`);
  }

  getById(id: string) {
    return this.http.get<Client>(`${environment.URI}client/${id}`);
  }

  create(client: Client) {
    return this.http.post<Client>(`${environment.URI}client`, client);
  }

  update(client: Client) {
    return this.http.put<Client>(`${environment.URI}client`, client);
  }

  delete(id: number) {
    return this.http.delete(`${environment.URI}client/${id}`);
  }
}
