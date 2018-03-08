import { throwIfAlreadyLoaded } from '../@core/module-import-guard';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { GoogleModule } from "./google/google.module";
import { CommonModule } from "@angular/common";

const NB_CORE_PROVIDERS = [
    ...GoogleModule.forRoot().providers,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
    ],
    declarations: [],
})
export class AdditionalLibrariesModule {
    constructor( @Optional() @SkipSelf() parentModule: AdditionalLibrariesModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: AdditionalLibrariesModule,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
}
