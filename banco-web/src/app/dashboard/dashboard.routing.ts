import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientsViewComponent } from './clients-view/clients-view.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const Rutas: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'client/:id',
        component: ClientPageComponent,
      },
      {
        path: 'create/account/:id',
        component: CreateAccountComponent,
      },
      {
        path: 'create/client',
        component: CreateClientComponent,
      },
      {
        path: '',
        component: ClientsViewComponent,
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(Rutas)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
