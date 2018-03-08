import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PipeModule } from '../pipes/pipe.module';
import { OrderHistoryComponent } from './order-history.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot(),
    Ng2SmartTableModule,
  ],
  declarations: [
    OrderHistoryComponent
  ],
  entryComponents: [
  ],
})
export class OrderHistoryModule { }
