import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { PhonePipe } from './pipes/PhonePipe';
import { PipeModule } from './pipes/pipe.module';
import { CustomerHistoryModule } from './customer-history/customer-history.module';
import { NewOrderModule } from './new-order/new-order.module';
import { OrderHistoryModule } from './order-history/order-history.module';
import { TerminalModule } from './terminal/terminal.module';
import { ReusablesModule } from './reusables/reusables.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    PipeModule,
    CustomerHistoryModule,
    NewOrderModule,
    OrderHistoryModule,
    TerminalModule,
    ReusablesModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  exports: [
    ReusablesModule
  ]
})
export class PagesModule {
}
