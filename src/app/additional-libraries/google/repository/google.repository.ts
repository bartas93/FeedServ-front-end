
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http/src/params';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { AppConstants } from '../../../app-constants';

//Interceptor nie dodaje jwt do http PUT dlatego w OrderGetPaid - jest postem zamiast putem
@Injectable()
export class GoogleRepository {

    private baseUrl: string = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric";
    private api_key: string = "&key=" + AppConstants.GOOGLE_MAPS_DISTANCE_MATRIX_API_KEY;
    private destination: string = "&destinations=";
    private origin: string = "&origins=";

    constructor(private http: HttpClient) { }

    getDistanceAndDuration(origin: string, destination: string): Observable<any> {
        return this.http.get<any>(this.baseUrl + this.origin + origin + this.destination + destination + this.api_key);
    }
}
