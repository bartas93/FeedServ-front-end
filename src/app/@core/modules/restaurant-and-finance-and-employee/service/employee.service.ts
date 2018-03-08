import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { EmployeeRepository } from "../repository/employee.repository";
import { SimpleEmployeeTo } from "../model/SimpleEmployeeTo";
@Injectable()
export class EmployeeService {

    constructor(private employeeRepository: EmployeeRepository) { }

    getOnlineDriversEmployee(): Observable<SimpleEmployeeTo[]> {
        return this.employeeRepository.getOnlineDriversEmployee();
    }

}
