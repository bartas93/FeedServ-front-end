import { ChartModule } from 'angular2-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts/release';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PipeModule } from '../pipes/pipe.module';
import { TerminalComponent } from './terminal.component';


@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    PipeModule.forRoot(),
    NgxChartsModule,
    ChartModule
  ],
  declarations: [
    TerminalComponent
  ],
  entryComponents: [
  ],
})
export class TerminalModule { }
