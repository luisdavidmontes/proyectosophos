import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css'],
})
export class UpdateClientComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientSvc: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.form = this.fb.group({
      id: [id],
      name: ['', Validators.required],
      identificationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', Validators.required],
    });
    this.updateForm(id);
  }

  updateForm(id: string) {
    this.clientSvc.getById(id).subscribe({
      next: (client) => this.form.reset(client),
    });
  }

  ngOnInit(): void {}

  update() {
    if (this.form.invalid) return;
    this.clientSvc
      .update(this.form.value)
      .subscribe({ next: () => this.router.navigate(['/dashboard']) });
  }
}
