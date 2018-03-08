import { AddressTo } from "./AddressTo";
import { SimpleOrderTo } from "./SimpleOrderTo";



export class CustomerWithoutOrdersTo {
	id: number;
	phoneNumber: string;
	name: string;
	email: string;
	description: string;
	isOnBlackList: boolean;
	addressTos: AddressTo[];
	simpleOrderTos: SimpleOrderTo[];
}
