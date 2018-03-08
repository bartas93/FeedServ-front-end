import { NgModule } from '@angular/core';
import { PhonePipe } from './PhonePipe';

@NgModule({
    imports: [],
    declarations: [PhonePipe],
    exports: [PhonePipe],
})

export class PipeModule {

    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
} 
