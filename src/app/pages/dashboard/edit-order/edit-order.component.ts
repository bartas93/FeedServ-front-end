import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NbAuthJWTToken } from '../../../nb-auth/services/token.service';
import { NbAuthService } from '../../../nb-auth/services/auth.service';

@Component({
    selector: 'edit-order',
    styleUrls: ['./edit-order.component.scss'],
    templateUrl: './edit-order.component.html',
})
export class EditOrderComponent {

    constructor(private modalService: NgbModal) { }

}