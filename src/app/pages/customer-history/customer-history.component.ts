import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import 'style-loader!angular2-toaster/toaster.css';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerService } from '../../@core/modules/order-and-customer-and-partner/service/customer.service';
@Component({
  selector: 'customer-history',
  styleUrls: ['./customer-history.component.scss'],
  templateUrl: './customer-history.component.html',
})
export class CustomerHistoryComponent {
  config: ToasterConfig;
  source: LocalDataSource = new LocalDataSource();


  constructor(private toasterService: ToasterService, private customerService: CustomerService) {
    this.customerService.getCustomerTableTos().subscribe(data => {
      this.source.load(data);
    }, err => {
      this.showToast("error", "Serwer", "Problem z połączeniem z serwerem");
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      customerId: {
        title: 'ID',
        type: 'number',
      },
      phoneNumber: {
        title: 'Telefon',
        type: 'string',
      },
      addresses: {
        title: 'Adresy',
        type: 'string',
      },
      totalPaidMoney: {
        title: 'Zysk całkowity',
        valuePrepareFunction: (value) => { return value.toFixed(2) + " zł" },
      },
      quantityOfOrders: {
        title: 'Ilość zamówień',
        type: 'number',
      },
      name: {
        title: 'Imie',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      isOnBlackList: {
        title: 'Czarna lista',
        type: 'boolean',
      },
    },
  };

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