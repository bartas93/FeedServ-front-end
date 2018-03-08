import { NewChangeableProductTo } from "./NewChangeableProductTo";

export class NewChangesInOrderItemTo {
	id: number;
	groupOfChangableProductsId: number;
	addedProducts: NewChangeableProductTo[];
	removedProducts: NewChangeableProductTo[];
}
