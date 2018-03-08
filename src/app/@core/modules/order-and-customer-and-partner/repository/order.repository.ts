
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
import { NewOrderTo } from '../model/NewOrderTo';
import { HistoryTableOrderTo } from '../model/HistoryTableOrderTo';

//Interceptor nie dodaje jwt do http PUT dlatego w OrderGetPaid - jest postem zamiast putem
@Injectable()
export class OrderRepository {
    private baseUrl: string = AppConstants.API_ENDPOINT + "orders/";

    constructor(private http: HttpClient, private authService: NbAuthService) { }

    getOrdersInProgress(): Observable<SimpleOrderTo[]> {
        return this.http.get<SimpleOrderTo[]>(this.baseUrl + "in-progress");
    }
    getCompletedOrders(): Observable<HistoryTableOrderTo[]> {
        return this.http.get<HistoryTableOrderTo[]>(this.baseUrl + "completed");
    }

    orderGetPaid(simpleOrderTo: SimpleOrderTo): Observable<SimpleOrderTo> {
        return this.http.post<SimpleOrderTo>(this.baseUrl + "order-get-paid", simpleOrderTo);
    }

    saveNewOrder(newOrderTo: NewOrderTo): Observable<SimpleOrderTo> {
        return this.http.post<SimpleOrderTo>(this.baseUrl + "new-order", newOrderTo);
    }
}
