import { AddressTo } from "./AddressTo";
import { NewOrderItemTo } from "./NewOrderItemTo";
import { CustomerWithoutOrdersTo } from "./CustomerWithoutOrdersTo";

export class NewOrderTo {
	id: number;
	deliveryGroup: number;
	customerTable: string;
	orderAtTime: Date;
	receivedTime: Date;
	deliveryCost: number;
	paymentMethod: string;
	orderStatus: string;
	orderLocationType: string;
	driverEmployeeId: number;
	reveivedByEmployeeId: number;
	customerWithoutOrdersTo: CustomerWithoutOrdersTo;
	addressTo: AddressTo;
	newOrderItemTos: NewOrderItemTo[];
	comment: string;
	restaurantId: number;
}