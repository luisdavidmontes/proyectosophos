import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  create(account: Account) {
    return this.http.post(`${environment.URI}account`, account);
  }

  delete(id: number) {
    return this.http.delete(`${environment.URI}account/:${id}`);
  }
}
