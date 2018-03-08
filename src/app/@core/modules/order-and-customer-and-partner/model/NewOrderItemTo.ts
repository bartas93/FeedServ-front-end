import { NewChangesInOrderItemTo } from "../../inventory-and-menu/model/NewChangesInOrderItemTo";

export class NewOrderItemTo {

    id: number;
    totalCostWithAdditionalProducts: number;
    isCooked: boolean;
    imageUrl: string;
    menuItemName: string;
    dishLargenessName: string;
    menuItemDishLargenessId: number;
    newChangesInOrderItemTos: NewChangesInOrderItemTo[];

}
