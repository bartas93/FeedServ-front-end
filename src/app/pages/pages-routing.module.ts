import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { TerminalComponent } from './terminal/terminal.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'panel-glowny',
    component: DashboardComponent,
  },
  {
    path: 'nowe-zamowienie',
    component: NewOrderComponent,
  }, {
    path: 'kasa-fiskalna',
    component: TerminalComponent,
  }, {
    path: 'historia-zamowien',
    component: OrderHistoryComponent,
  }, {
    path: 'klienci',
    component: CustomerHistoryComponent,
    // }, {
    //   path: 'tables',
    //   loadChildren: './tables/tables.module#TablesModule',
  },
  {
    path: '',
    redirectTo: 'panel-glowny',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
