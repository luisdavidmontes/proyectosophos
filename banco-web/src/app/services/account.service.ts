import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/account';
import { Operation } from '../interfaces/operation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private uriOperations = {
    between: `${environment.URI}account/send`,
    consign: `${environment.URI}account/consign`,
    withdraw: `${environment.URI}account/withdraw`,
  };
  constructor(private http: HttpClient, private authSvc: AuthService) {}

  create(account: Account) {
    return this.http.post(`${environment.URI}account`, account, {
      headers: this.authSvc.getHeader(),
    });
  }

  sendMoney(operation: Operation) {
    return this.http.post(this.uriOperations[operation.type], operation, {
      headers: this.authSvc.getHeader(),
    });
  }

  delete(id: number) {
    return this.http.delete(`${environment.URI}account/:${id}`, {
      headers: this.authSvc.getHeader(),
    });
  }
}
