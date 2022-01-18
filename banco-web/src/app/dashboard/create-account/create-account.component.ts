import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  private id: string;
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private accountSvc: AccountService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.form = this.fb.group({
      type: ['', Validators.required],

      number: [0, Validators.required],

      createdAt: [new Date().toString()],

      active: [true, Validators.required],

      balance: [0, Validators.required],

      client: [this.id, Validators.required],
    });
  }

  ngOnInit(): void {}

  send() {
    console.log(this.form.value);
    if (this.form.invalid) return;
    this.accountSvc
      .create(this.form.value)
      .subscribe(() => this.router.navigate(['/dashboard/client', this.id]));
  }
}
