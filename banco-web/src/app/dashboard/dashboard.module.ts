import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { ClientsViewComponent } from './clients-view/clients-view.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ClientsViewComponent,
    ClientPageComponent,
    CreateClientComponent,
    CreateAccountComponent,
    UpdateClientComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, ReactiveFormsModule],
})
export class DashboardModule {}
