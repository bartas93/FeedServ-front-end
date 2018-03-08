import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { OrderRepository } from "../repository/order.repository";
import { SimpleOrderTo } from "../model/SimpleOrderTo";
import { generate } from "rxjs/observable/generate";
import { NewOrderTo } from "../model/NewOrderTo";
import { HistoryTableOrderTo } from "../model/HistoryTableOrderTo";

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository) { }

    getOrdersInProgress(): Observable<SimpleOrderTo[]> {
        return this.orderRepository.getOrdersInProgress();
    }

    getCompletedOrders(): Observable<HistoryTableOrderTo[]> {
        return this.orderRepository.getCompletedOrders();
    }

    orderGetPaid(simpleOrderTo: SimpleOrderTo): Observable<SimpleOrderTo> {
        simpleOrderTo.paidAmount = simpleOrderTo.amountToPay;
        simpleOrderTo.paymentTime = new Date();
        return this.orderRepository.orderGetPaid(simpleOrderTo);
    }

    saveNewOrder(newOrderTo: NewOrderTo): Observable<SimpleOrderTo> {
        return this.orderRepository.saveNewOrder(newOrderTo);
    }

    groupOrders(orders: SimpleOrderTo[]): SimpleOrderTo[][] {
        orders = this.calculateTotalCostInAllOrders(orders);
        let localOrders = orders.filter(o => o.orderLocationType === "LOCAL");
        let takeawayOrders = orders.filter(o => o.orderLocationType === "TAKEAWAY");
        let deliveryOrders = orders.filter(o => o.orderLocationType === "DELIVERY");
        let groupedOrders = [localOrders, takeawayOrders, deliveryOrders];
        return groupedOrders;
    }

    private calculateTotalCostInAllOrders(orders: SimpleOrderTo[]): SimpleOrderTo[] {
        orders.forEach(order => {
            order.amountToPay = 0;
            order.simpleOrderItemTos.forEach(item => {
                order.amountToPay += item.totalCostWithAdditionalProducts;
            });
            if (order.deliveryCost) {
                order.amountToPay += order.deliveryCost;
            }
        });
        return orders;
    }
}
