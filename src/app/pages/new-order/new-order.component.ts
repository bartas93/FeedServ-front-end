import { AddressTo } from '../../@core/modules/order-and-customer-and-partner/model/AddressTo';
import { CustomerWithoutOrdersTo } from '../../@core/modules/order-and-customer-and-partner/model/CustomerWithoutOrdersTo';
import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NbAuthService, NbAuthJWTToken } from '../../nb-auth/index';
import { NewOrderTo } from '../../@core/modules/order-and-customer-and-partner/model/NewOrderTo';
import { NewOrderItemTo } from '../../@core/modules/order-and-customer-and-partner/model/NewOrderItemTo';
import { OrderService } from '../../@core/modules/order-and-customer-and-partner/service/order.service';


@Component({
  selector: 'new-order',
  styleUrls: ['./new-order.component.scss'],
  templateUrl: './new-order.component.html',
})
export class NewOrderComponent implements OnInit {
  private authToken: any;
  private config: ToasterConfig;
  private myForm: FormGroup;
  private orderLocationTypes = [{ name: 'Dowóz', value: 'DELIVERY' }, { name: 'Wynos', value: 'TAKEAWAY' }, { name: 'Lokal', value: 'LOCAL' }];
  private paymentMethods = [{ name: 'Karta', value: 'CARD' }, { name: 'Gotówka', value: 'CASH' }];
  private newOrderTo: NewOrderTo;
  private selectedOrderLocationType;
  private selectedPaymentMethod;


  constructor(private toasterService: ToasterService, private formBuilder: FormBuilder, private nbAuthService: NbAuthService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.initializeNewOrder();
    this.initializeAuth();
    this.initializeForm();
    this.initializeValidators();
  }

  initializeNewOrder() {
    this.newOrderTo = new NewOrderTo();
    this.newOrderTo.addressTo = new AddressTo();
    this.newOrderTo.customerWithoutOrdersTo = new CustomerWithoutOrdersTo();
    this.newOrderTo.customerWithoutOrdersTo.addressTos = [];
    this.newOrderTo.newOrderItemTos = [];
  }

  initializeAuth() {
    this.nbAuthService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.getValue()) {
          this.authToken = token.getPayload();
        }
      });
  }

  saveOrder() {
    this.newOrderTo = this.mapToNewOrderTo(this.myForm.value);
    this.orderService.saveNewOrder(this.newOrderTo).subscribe(data => {
      this.showToast("success", "Dodano", "Zamówienie zostało dodane.");
      this.initializeForm();
    }, err => {
      this.showToast("danger", "Serwer", "Problem w połączeniu z serwerem. Spróbuj ponownie");
    });
  }

  mapToNewOrderTo(myForm: any): NewOrderTo {
    let order = new NewOrderTo();
    let now = new Date();
    order.deliveryGroup = myForm.changeTransportation.deliveryGroup;
    order.customerTable = myForm.additionalInfo.customerTable;
    order.orderAtTime = myForm.additionalInfo.orderAtTime ? new Date(now.getFullYear(), now.getMonth(), now.getDate(), myForm.additionalInfo.orderAtTime.hour, myForm.additionalInfo.orderAtTime.minute) : null;
    order.receivedTime = now;
    order.deliveryCost = myForm.orderLocationType == "DELIVERY" ? this.calculateDeliveryCost(myForm.customerAndAddress.address.street, myForm.customerAndAddress.address.streetNumber) : null;
    order.paymentMethod = myForm.paymentMethod == "" ? null : myForm.paymentMethod;
    order.orderStatus = "ORDER_RECEIVED_IN_RESTAURANT";
    order.orderLocationType = myForm.orderLocationType;
    order.driverEmployeeId = myForm.changeTransportation.driverEmployeeId;
    order.reveivedByEmployeeId = this.authToken.userId;
    order.comment = myForm.additionalInfo.comment;
    order.customerWithoutOrdersTo = myForm.customerAndAddress.customer.phoneNumber ? myForm.customerAndAddress.customer : null;
    order.addressTo = myForm.orderLocationType != "DELIVERY" ? null : myForm.customerAndAddress.address;
    order.newOrderItemTos = this.mapToNewOrdersItemTos(myForm.menuItems);
    return order;
  }

  mapToNewOrdersItemTos(menuItemsForm: Array<any>): NewOrderItemTo[] {
    let items: NewOrderItemTo[] = [];
    menuItemsForm.forEach((item: NewOrderItemTo) => {
      items.push(item);
    })
    return items;
  }

  resetForm() {
    this.showToast("warning", "Reset", "Zresetowano formularz zamówienia");
    this.myForm.reset();
  }

  calculateDeliveryCost(street, streetNumber): any {
    return null;
  }

  initializeForm() {
    this.myForm = null;
    this.myForm = this.formBuilder.group({
      orderLocationType: [null, Validators.required],
      customerAndAddress: this.formBuilder.group({
        customer: this.formBuilder.group({
          phoneNumber: [],
          name: [],
          email: [],
          description: [],
          isOnBlackList: [false],
        }),
        address: this.formBuilder.group({
          city: [this.authToken.restaurantAddress.split(",")[2]],
          street: [],
          streetNumber: [],
          localNumber: [],
          floor: [],
          country: [],
          postCode: [],
          comments: [],
        })
      }),
      additionalInfo: this.formBuilder.group({
        customerTable: [],
        orderAtTime: [],
        comment: [],
      }),
      changeTransportation: this.formBuilder.group({
        deliveryGroup: [],
        driverEmployeeId: [],
      }),
      menuItems: this.formBuilder.array([
      ], Validators.required),
      paymentMethod: []
    });
  }

  initializeValidators() {
    this.setConditionalValidators();
  }
  setConditionalValidators() {
    const customerAndAddressCtrl = (<any>this.myForm).controls.customerAndAddress;
    const customerCtrl = customerAndAddressCtrl.controls.customer;
    const addressCtrl = customerAndAddressCtrl.controls.address;

    // initialize value changes stream
    const changes$ = this.myForm.controls.orderLocationType.valueChanges;

    // subscribe to the stream
    changes$.subscribe(orderLocationType => {
      if (orderLocationType == 'DELIVERY') {
        customerCtrl.controls.phoneNumber.setValidators([Validators.required, Validators.minLength(9), Validators.maxLength(12)]);
        addressCtrl.controls.street.setValidators([Validators.required, Validators.minLength(3)]);
        addressCtrl.controls.streetNumber.setValidators([Validators.required]);
        addressCtrl.controls.city.setValidators([Validators.required]);
        this.myForm.controls.paymentMethod.setValidators([Validators.required]);

        this.myForm.controls.paymentMethod.updateValueAndValidity();
        customerCtrl.controls.phoneNumber.updateValueAndValidity();
        addressCtrl.controls.street.updateValueAndValidity();
        addressCtrl.controls.streetNumber.updateValueAndValidity();
        addressCtrl.controls.city.updateValueAndValidity();
      } else {
        this.myForm.controls.paymentMethod.setValidators(null);
        customerCtrl.controls.phoneNumber.setValidators(null);
        addressCtrl.controls.street.setValidators(null);
        addressCtrl.controls.streetNumber.setValidators(null);
        addressCtrl.controls.city.setValidators(null);
        this.myForm.controls.paymentMethod.updateValueAndValidity();
        customerCtrl.controls.phoneNumber.updateValueAndValidity();
        addressCtrl.controls.street.updateValueAndValidity();
        addressCtrl.controls.streetNumber.updateValueAndValidity();
        addressCtrl.controls.city.updateValueAndValidity();
      }
    });
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);

  }
}
