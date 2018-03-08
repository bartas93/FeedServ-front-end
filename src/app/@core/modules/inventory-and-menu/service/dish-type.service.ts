import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { generate } from "rxjs/observable/generate";
import { DishTypeRepository } from "../repository/dish-type.repository";
import { ShowMenuDishTypeTo } from "../model/ShowMenuDishTypeTo";

@Injectable()
export class DishTypeService {
    constructor(private dishTypeRepository: DishTypeRepository) { }

    getShowMenuDishTypeTos(): Observable<ShowMenuDishTypeTo[]> {
        return this.dishTypeRepository.getShowMenuDishTypeTos();
    }
}
