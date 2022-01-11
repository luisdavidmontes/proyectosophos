import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const Rutas: Routes = [{ path: '', component: DashboardPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(Rutas)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
