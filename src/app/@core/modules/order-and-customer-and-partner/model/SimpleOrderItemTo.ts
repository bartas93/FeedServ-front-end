import { SimplePromotionTo } from "./SimplePromotionTo";



export class SimpleOrderItemTo {
	id: number;
	menuItemName: string;
	menuItemImageUrl: string;
	dishTypeName: string;
	dishLargenessName: string;
	totalCostWithAdditionalProducts: number;
	isOrderItemChanged: boolean;
	isCooked: boolean;
	isPromoted: boolean;
}
