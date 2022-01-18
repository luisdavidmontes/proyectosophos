import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  success(title: string) {
    return Swal.fire(title, '', 'success');
  }

  error(e: any) {
    return Swal.fire('Ups! ah ocurrido un error', e, 'error');
  }

  errorMessage(title: string) {
    return Swal.fire(title, '', 'error');
  }
}
