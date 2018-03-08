import { ProductQuantityTo } from "./ProductQuantityTo";
import { DishLargenessTo } from "./DishLargenessTo";

export class ChangeableProductTo {
	id: number
	additionalCost: number;
	productQuantityTo: ProductQuantityTo;
	dishLargenessTo: DishLargenessTo;
}
