import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PipeModule } from '../pipes/pipe.module';
import { CustomerHistoryComponent } from './customer-history.component';


@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot(),
    Ng2SmartTableModule,
  ],
  declarations: [
    CustomerHistoryComponent
  ],
  entryComponents: [
  ],
})
export class CustomerHistoryModule { }
