import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from './order-and-customer-and-partner/service/order.service';
import { OrderRepository } from './order-and-customer-and-partner/repository/order.repository';
import { DishTypeRepository } from './inventory-and-menu/repository/dish-type.repository';
import { DishTypeService } from './inventory-and-menu/service/dish-type.service';
import { CustomerRepository } from './order-and-customer-and-partner/repository/customer.repository';
import { CustomerService } from './order-and-customer-and-partner/service/customer.service';
import { EmployeeService } from './restaurant-and-finance-and-employee/service/employee.service';
import { EmployeeRepository } from './restaurant-and-finance-and-employee/repository/employee.repository';
import { TerminalService } from './restaurant-and-finance-and-employee/service/terminal.service';
import { TerminalRepository } from './restaurant-and-finance-and-employee/repository/terminal.repository';


const SERVICES = [
    OrderService,
    OrderRepository,
    DishTypeRepository,
    DishTypeService,
    CustomerRepository,
    CustomerService,
    EmployeeService,
    EmployeeRepository,
    TerminalService,
    TerminalRepository
];

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ...SERVICES,
    ],
})
export class RestaurantModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: RestaurantModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}