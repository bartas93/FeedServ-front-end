import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OrderRepository } from "../repository/order.repository";
import { SimpleOrderTo } from "../model/SimpleOrderTo";
import { CustomerRepository } from "../repository/customer.repository";
import { CustomerWithoutOrdersTo } from "../model/CustomerWithoutOrdersTo";
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { CustomerTableTo } from "../model/CustomerTableTo";
@Injectable()
export class CustomerService {
    constructor(private customerRepository: CustomerRepository) { }

    getCustomersByPartOfPhoneNumber(term: String): Observable<CustomerWithoutOrdersTo[]> {
        return this.customerRepository.getCustomersByPartOfPhoneNumber(term);
    }
    getCustomerTableTos(): Observable<CustomerTableTo[]> {
        return this.customerRepository.getCustomerTableTos();
    }

    searchCustomers(term: string): Observable<CustomerWithoutOrdersTo[]> {
        if (!term.trim() || term.trim().length < 4) {
            return of([]);
        }
        return this.getCustomersByPartOfPhoneNumber(term);
    }

}
