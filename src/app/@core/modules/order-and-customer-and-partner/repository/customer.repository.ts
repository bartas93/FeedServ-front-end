
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http/src/params';
import { SimpleOrderTo } from '../model/SimpleOrderTo';
import { NbAuthService, NbAuthJWTToken } from '../../../../nb-auth/index';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { AppConstants } from '../../../../app-constants';
import { CustomerWithoutOrdersTo } from '../model/CustomerWithoutOrdersTo';
import { CustomerTableTo } from '../model/CustomerTableTo';

//Interceptor nie dodaje jwt do http PUT dlatego w OrderGetPaid - jest postem zamiast putem
@Injectable()
export class CustomerRepository {
    private baseUrl: string = AppConstants.API_ENDPOINT + "customers/";

    constructor(private http: HttpClient, private authService: NbAuthService) { }

    getCustomersByPartOfPhoneNumber(term: String): Observable<CustomerWithoutOrdersTo[]> {
        return this.http.get<CustomerWithoutOrdersTo[]>(this.baseUrl + term);
    }

    getCustomerTableTos(): Observable<CustomerTableTo[]> {
        return this.http.get<CustomerTableTo[]>(this.baseUrl + "customer-table");
    }
}
