import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NewOrderItemTo } from '../../../@core/modules/order-and-customer-and-partner/model/NewOrderItemTo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'menu-item-form',
  styleUrls: ['./menu-item-form.component.scss'],
  templateUrl: './menu-item-form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MenuItemFormComponent {

  @Input() menuItems: FormArray;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  addNewOrderItems() {
    const activeModal = this.modalService.open(MenuComponent, { size: 'lg', container: 'nb-layout', windowClass: "modal-xxl" });
    activeModal.result.then((result: NewOrderItemTo[]) => {
      result.forEach(newOrderItemTo => {
        this.addRowToForm(newOrderItemTo);
      })
    });
  }

  addRowToForm(item: NewOrderItemTo) {
    this.menuItems.push(
      this.formBuilder.group({
        id: [item.id],
        totalCostWithAdditionalProducts: [item.totalCostWithAdditionalProducts],
        isCooked: [false],
        imageUrl: [item.imageUrl],
        menuItemName: [item.menuItemName],
        dishLargenessName: [item.dishLargenessName],
        menuItemDishLargenessId: [item.menuItemDishLargenessId],
        newChangesInOrderItemTos: [item.newChangesInOrderItemTos]
      })
    );
  }

  removeRowFromForm(index: number) {
    this.menuItems.removeAt(index);
  }

}