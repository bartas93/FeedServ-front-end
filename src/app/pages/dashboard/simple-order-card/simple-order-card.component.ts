import { SimpleOrderTo } from '../../../@core/modules/order-and-customer-and-partner/model/SimpleOrderTo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NbAuthJWTToken } from '../../../nb-auth/services/token.service';
import { NbAuthService } from '../../../nb-auth/services/auth.service';
import { PaymentComponent } from '../../reusables/payment/payment.component';

@Component({
    selector: 'simple-order-card',
    styleUrls: ['./simple-order-card.component.scss'],
    templateUrl: './simple-order-card.component.html',
})
export class SimpleOrderCardComponent {

    @Input() order: SimpleOrderTo;
    @Output() onOrderPaid = new EventEmitter<SimpleOrderTo>();

    constructor(private modalService: NgbModal) { }

    payForTheOrder(order: SimpleOrderTo) {
        const activeModal = this.modalService.open(PaymentComponent, { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.order = order;
        activeModal.result.then(result => {
            this.onOrderPaid.emit(result);
        })
    }

}