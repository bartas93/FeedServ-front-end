import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../@core/modules/order-and-customer-and-partner/service/order.service';
import { SimpleOrderTo } from '../../@core/modules/order-and-customer-and-partner/model/SimpleOrderTo';
import 'style-loader!angular2-toaster/toaster.css';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  config: ToasterConfig;
  private groupedOrders: SimpleOrderTo[][] = [];
  private orderQuantity: number = 0;
  private intervalId;
  private reloadTimeInSec: number = 30;

  constructor(private orderService: OrderService, private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.getGroupedOrders();
    this.intervalId = setInterval(() => {
      this.getGroupedOrders();
    }, 1000 * this.reloadTimeInSec);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getGroupedOrders(): void {
    this.orderService.getOrdersInProgress().subscribe((data) => {
      this.orderQuantity = data.length;
      this.groupedOrders = this.orderService.groupOrders(data);
    }, err => {
      this.showToast('error', 'Serwer', 'Wystąpił błąd w połączeniu z serwerem. Spróbuj ponownie za kilka minut');
    });
  }

  onOrderPaid(order: SimpleOrderTo) {
    if (order.paymentTime != null && order.paidAmount != null) {
      this.showToast('success', 'Sukces!', 'Zamówienie nr: ' + order.id + ' zostało prawidłowo opłacone.')
    }
    else {
      this.showToast('error', 'UPS!', 'Zamówienie nr: ' + order.id + ' nie zostało prawidłowo opłacone. Problem w połączeniu z serwerem');
    }
    this.getGroupedOrders();
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
