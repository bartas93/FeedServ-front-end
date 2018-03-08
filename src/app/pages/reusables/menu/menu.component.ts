import { Component, OnInit } from '@angular/core';
import { NewOrderItemTo } from '../../../@core/modules/order-and-customer-and-partner/model/NewOrderItemTo';
import { ShowMenuDishTypeTo } from '../../../@core/modules/inventory-and-menu/model/ShowMenuDishTypeTo';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DishTypeService } from '../../../@core/modules/inventory-and-menu/service/dish-type.service';
import { ShowSimpleMenuItemDishLargenessTo } from '../../../@core/modules/inventory-and-menu/model/ShowSimpleMenuItemDishLargenessTo';
import { ShowMenuItemTo } from '../../../@core/modules/inventory-and-menu/model/ShowMenuItemTo';
@Component({
  selector: 'menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  private newOrderItemTos: NewOrderItemTo[] = [];
  private showMenuDishTypeTos: ShowMenuDishTypeTo[];
  constructor(private activeModal: NgbActiveModal, private dishTypeService: DishTypeService) { }

  ngOnInit(): void {
    this.newOrderItemTos;
    this.dishTypeService.getShowMenuDishTypeTos().subscribe(data => {
      this.showMenuDishTypeTos = data;
    }, err => {
      console.log("error", "Serwer", "Problem z połączeniem z serwerem.")
    });
  }

  cancel() {
    this.newOrderItemTos = [];
    this.activeModal.close(this.newOrderItemTos);
  }

  doChanges(midl: ShowSimpleMenuItemDishLargenessTo) { }

  addToSummary(menuItem: ShowMenuItemTo, midl: ShowSimpleMenuItemDishLargenessTo) {
    let newOrderItemTo = this.createNewOrderItem(menuItem, midl);
    this.newOrderItemTos.push(newOrderItemTo);
  }
  save() {
    this.activeModal.close(this.newOrderItemTos);
  }

  removeItem(orderItem: NewOrderItemTo) {
    let index = this.newOrderItemTos.indexOf(orderItem);
    this.newOrderItemTos.splice(index, 1);
  }

  createNewOrderItem(menuItem: ShowMenuItemTo, midl: ShowSimpleMenuItemDishLargenessTo): NewOrderItemTo {
    let newOrderItemTo = new NewOrderItemTo();
    newOrderItemTo.totalCostWithAdditionalProducts = midl.costAfterPromotion;
    newOrderItemTo.menuItemDishLargenessId = midl.id;
    newOrderItemTo.menuItemName = menuItem.name;
    newOrderItemTo.dishLargenessName = midl.dishLargenessName;
    newOrderItemTo.imageUrl = menuItem.imageUrl;
    return newOrderItemTo;
  }

}
