import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  constructor(private http: HttpClient, private alert: AlertService) {}

  getHeader() {
    return new HttpHeaders({ token: this.token });
  }

  login(data: { username: string; password: string }) {
    return this.http
      .post<{ user: any; token: string }>(`${environment.URI}auth/login`, data)
      .pipe(
        tap((data) => (this.token = data.token)),
        catchError((e) => of(this.alert.error(e)))
      );
  }
}
