import { Component } from '@angular/core';
import { SimpleOrderTo } from '../../../@core/modules/order-and-customer-and-partner/model/SimpleOrderTo';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../@core/modules/order-and-customer-and-partner/service/order.service';
@Component({
    selector: 'payment',
    styleUrls: ['./payment.component.scss'],
    templateUrl: './payment.component.html',
})
export class PaymentComponent {
    order: SimpleOrderTo;
    paymentMethod: string = null;

    constructor(private activeModal: NgbActiveModal, private orderService: OrderService) { }

    closeModal() {
        this.activeModal.close(this.order);
    }
    setPaymentMethod(paymentMethod: string) {
        this.paymentMethod = paymentMethod;
    }

    payForTheOrder() {
        this.order.paymentMethod = this.paymentMethod;
        this.orderService.orderGetPaid(this.order).subscribe(data => {
            this.closeModal();
        });
    }
}
