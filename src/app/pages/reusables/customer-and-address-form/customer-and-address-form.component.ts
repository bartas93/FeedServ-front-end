import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../../../@core/modules/order-and-customer-and-partner/service/customer.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CustomerWithoutOrdersTo } from '../../../@core/modules/order-and-customer-and-partner/model/CustomerWithoutOrdersTo';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { AddressTo } from '../../../@core/modules/order-and-customer-and-partner/model/AddressTo';
@Component({
  selector: 'customer-and-address-form',
  styleUrls: ['./customer-and-address-form.component.scss'],
  templateUrl: './customer-and-address-form.component.html',
})
export class CustomerAndAddressFormComponent implements OnInit {

  private more = "Rozwiń";
  customers$: Observable<CustomerWithoutOrdersTo[]>;
  private searchTerms = new Subject<string>();

  @Input() private customerAndAddress: FormGroup;
  @Input() private selectedOrderLocationType: string;

  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {
    this.customers$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.customerService.searchCustomers(term)),
    );
  }

  onKeyUp(term: string): void {
    this.searchTerms.next(term);
  }

  fillForm(customer: CustomerWithoutOrdersTo, address: AddressTo) {
    this.customerAndAddress.patchValue({
      address: {
        street: address.street,
        streetNumber: address.streetNumber,
        localNumber: address.localNumber,
        floor: address.floor,
        city: address.city,
        country: address.country,
        postCode: address.postCode,
        comments: address.comments
      },
      customer: {
        phoneNumber: customer.phoneNumber,
      }
    });
  }
  showMore() {
    this.more == "Ukryj" ? this.more = "Rozwiń" : this.more = "Ukryj";
  }

}
