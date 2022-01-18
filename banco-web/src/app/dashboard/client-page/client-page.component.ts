import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { Registry } from 'src/app/interfaces/registry';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/services/alert.service';
import { ClientService } from 'src/app/services/client.service';
import { RegistryService } from 'src/app/services/registry.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  public client!: Client;
  public registries: Registry[] = [];
  public form: FormGroup;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private clientSvc: ClientService,
    private accountSvc: AccountService,
    private registrySvc: RegistryService,
    private alert: AlertService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.form = this.fb.group({
      type: ['between', Validators.required],
      from: ['', Validators.required],
      to: [1, Validators.required],
      balance: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get type() {
    return this.form.get('type')?.value;
  }

  ngOnInit(): void {
    this.clientSvc
      .getById(this.id)
      .subscribe((client: Client) => (this.client = client));
    this.registrySvc
      .getRegistry(this.id)
      .subscribe((data) => (this.registries = data));
  }

  sendMoney() {
    console.log(this.form.value);
    if (this.form.invalid) return;
    this.accountSvc.sendMoney(this.form.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (e) =>
        this.alert.errorMessage('No se pudo completar la operacion'),
    });
  }
}
