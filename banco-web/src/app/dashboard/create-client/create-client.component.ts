import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
})
export class CreateClientComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clientSvc: ClientService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      identificationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
      date: [new Date().toLocaleString()],
    });
  }

  ngOnInit(): void {}

  send() {
    console.log(this.form.value);
    if (this.form.invalid) return;
    this.clientSvc
      .create(this.form.value)
      .subscribe(() => this.router.navigate(['/dashboard']));
  }
}
