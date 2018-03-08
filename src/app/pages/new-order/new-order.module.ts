import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PipeModule } from '../pipes/pipe.module';
import { NewOrderComponent } from './new-order.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerAndAddressFormComponent } from '../reusables/customer-and-address-form/customer-and-address-form.component';
import { ReusablesModule } from '../reusables/reusables.module';
import { PaymentComponent } from '../reusables/payment/payment.component';
import { MenuComponent } from '../reusables/menu/menu.component';


@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ReusablesModule
  ],
  declarations: [
    NewOrderComponent
  ],
  entryComponents: [
    PaymentComponent,
    MenuComponent
  ],
})
export class NewOrderModule { }
