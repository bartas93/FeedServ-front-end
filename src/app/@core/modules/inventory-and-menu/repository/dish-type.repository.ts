
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http/src/params';
import { NbAuthService, NbAuthJWTToken } from '../../../../nb-auth/index';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { ShowMenuDishTypeTo } from '../model/ShowMenuDishTypeTo';
import { AppConstants } from '../../../../app-constants';

//Interceptor nie dodaje jwt do http PUT dlatego w OrderGetPaid - jest postem zamiast putem
@Injectable()
export class DishTypeRepository {
    private baseUrl: string = AppConstants.API_ENDPOINT + "dish-type/";

    constructor(private http: HttpClient, private authService: NbAuthService) { }

    getShowMenuDishTypeTos(): Observable<ShowMenuDishTypeTo[]> {
        return this.http.get<ShowMenuDishTypeTo[]>(this.baseUrl + "all");
    }
}
