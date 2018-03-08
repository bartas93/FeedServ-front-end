import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { generate } from "rxjs/observable/generate";
import { GoogleRepository } from "../repository/google.repository";

@Injectable()
export class GoogleService {
    constructor(private googleRepository: GoogleRepository) { }

    getDistanceAndDuration(origin: string, destination: string): Observable<any> {
        return this.googleRepository.getDistanceAndDuration(origin, destination);
    }
}
