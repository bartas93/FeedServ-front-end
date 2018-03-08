import { HttpResponse } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider } from '../nb-auth';


import { getDeepFromObject } from '../nb-auth/helpers';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { RestaurantModule } from './modules/restaurant.module';
import { AppConstants } from '../app-constants';


const BASE_ENDPOINT = AppConstants.API_ENDPOINT;
const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};


const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...RestaurantModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          baseEndpoint: BASE_ENDPOINT,
          login: {
            allwaysFail: false,
            endpoint: 'login',
            method: 'post',
          },
          register: {
            endpoint: 'auth/register',
            method: 'post',
          },
          logout: {
            endpoint: 'auth/logout',
            method: 'post',
          },
          requestPass: {
            endpoint: 'request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: 'reset-pass',
            method: 'post',
          },
          token: {
            key: 'token',
          },
        },
      },
    },
    forms: {
      login: formSetting,
      register: formSetting,
      requestPassword: formSetting,
      resetPassword: formSetting,
      logout: formSetting,
      validation: {
        password: {
          required: true,
          minLength: 4,
          maxLength: 50,
        },
        email: {
          required: true,
        },
        fullName: {
          required: false,
          minLength: 4,
          maxLength: 50,
        },
      },
    },
  }).providers,
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
