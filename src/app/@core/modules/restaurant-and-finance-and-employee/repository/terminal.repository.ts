
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AppConstants } from '../../../../app-constants';
import { TerminalTo } from '../model/TerminalTo';

@Injectable()
export class TerminalRepository {

    private baseUrl: string = AppConstants.API_ENDPOINT + "terminal/";

    constructor(private http: HttpClient) { }

    getDailyTerminalTo(): Observable<TerminalTo> {
        return this.http.get<TerminalTo>(this.baseUrl + "today");
    }
}
