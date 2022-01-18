import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registry } from '../interfaces/registry';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  constructor(private http: HttpClient, private authSvc: AuthService) {}

  getRegistry(id: string) {
    return this.http.get<Registry[]>(`${environment.URI}registry/${id}`, {
      headers: this.authSvc.getHeader(),
    });
  }
}
