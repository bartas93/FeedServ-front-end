import { LocalDataSource } from 'ng2-smart-table';
import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { OrderService } from '../../@core/modules/order-and-customer-and-partner/service/order.service';
import { SimpleOrderTo } from '../../@core/modules/order-and-customer-and-partner/model/SimpleOrderTo';
@Component({
  selector: 'order-history',
  styleUrls: ['./order-history.component.scss'],
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent {
  config: ToasterConfig;
  source: LocalDataSource = new LocalDataSource();


  constructor(private toasterService: ToasterService, private orderService: OrderService) {
    this.orderService.getCompletedOrders().subscribe(data => {
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
      orderId: {
        title: 'ID',
        type: 'number',
      },
      receivedTime: {
        title: 'Przyjęto',
        type: 'string',
      },
      paymentTime: {
        title: 'Opłacono',
        type: 'string',
      },
      paidAmount: {
        title: 'Kwota',
        valuePrepareFunction: (value) => { return value.toFixed(2) + " zł" },
      },
      quantityOfDishes: {
        title: 'Ilośc dań',
        valuePrepareFunction: (value) => { return value + " szt." },
      },
      paymentMethod: {
        title: 'Płatność',
        type: 'string',
      },
      orderLocationType: {
        title: 'Typ',
        type: 'string',
      },
      customerPhoneNumber: {
        title: 'Klient',
        type: 'string',
      },
      partnerName: {
        title: 'Partner',
        type: 'string',
      },
      orderStatus: {
        title: 'Status',
        type: 'string',
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
