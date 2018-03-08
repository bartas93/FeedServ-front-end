import { SimpleEmployeeTo } from "../../restaurant-and-finance-and-employee/model/SimpleEmployeeTo";
import { SimpleAddressTo } from "./SimpleAddressTo";
import { SimpleCustomerTo } from "./SimpleCustomerTo";
import { SimplePartnerTo } from "./SimplePartnerTo";
import { SimpleOrderItemTo } from "./SimpleOrderItemTo";

export class SimpleOrderTo {

    id: number;
    deliveryGroup: number;
    receivedTime: Date;
    orderAtTime: Date;
    customerTable: string;
    paymentMethod: string;
    orderStatus: string;
    isCompleted: boolean;
    orderLocationType: string;
    driverSimpleEmployeeTo: SimpleEmployeeTo;
    reveivedBySimpleEmployeeTo: SimpleEmployeeTo;
    simpleAddressTo: SimpleAddressTo;
    simpleCustomerTo: SimpleCustomerTo;
    simplePartnerTo: SimplePartnerTo;
    simpleOrderItemTos: SimpleOrderItemTo[];
    paidAmount: number;
    amountToPay: number
    deliveryCost: number;
    comment: string;
    paymentTime: Date;
}