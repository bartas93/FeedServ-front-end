import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { PipeModule } from '../pipes/pipe.module';
import { SimpleOrderCardComponent } from './simple-order-card/simple-order-card.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { PaymentComponent } from '../reusables/payment/payment.component';


@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    SimpleOrderCardComponent,
    EditOrderComponent
  ],
  entryComponents: [
    PaymentComponent
  ],
})
export class DashboardModule { }
