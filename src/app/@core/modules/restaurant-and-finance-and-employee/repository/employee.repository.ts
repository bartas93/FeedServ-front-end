
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AppConstants } from '../../../../app-constants';
import { SimpleEmployeeTo } from '../model/SimpleEmployeeTo';

@Injectable()
export class EmployeeRepository {

    private baseUrl: string = AppConstants.API_ENDPOINT + "employee/";

    constructor(private http: HttpClient) { }

    getOnlineDriversEmployee(): Observable<SimpleEmployeeTo[]> {
        return this.http.get<SimpleEmployeeTo[]>(this.baseUrl + "online-drivers");
    }
}
