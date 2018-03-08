import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PipeModule } from '../pipes/pipe.module';
import { AdditionalInfoFormComponent } from './additional-info-form/additional-info-form.component';
import { ChangeMenuItemComponent } from './change-menu-item/change-menu-item.component';
import { ChangeTransportationFormComponent } from './change-transportation-form/change-transportation-form.component';
import { CustomerAndAddressFormComponent } from './customer-and-address-form/customer-and-address-form.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemFormComponent } from './menu-item-form/menu-item-form.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { PaymentComponent } from './payment/payment.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';


const COMPONENTS = [
  AdditionalInfoFormComponent,
  ChangeMenuItemComponent,
  ChangeTransportationFormComponent,
  CustomerAndAddressFormComponent,
  CustomerInfoComponent,
  GoogleMapComponent,
  MenuComponent,
  MenuItemFormComponent,
  OrderInfoComponent,
  PaymentComponent,
  ShowErrorsComponent
]

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot(),
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  entryComponents: [
  ],
})
export class ReusablesModule { }
