import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleRepository } from './repository/google.repository';
import { GoogleService } from './service/google.service';


const SERVICES = [
    GoogleRepository, GoogleService
];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class GoogleModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: GoogleModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}