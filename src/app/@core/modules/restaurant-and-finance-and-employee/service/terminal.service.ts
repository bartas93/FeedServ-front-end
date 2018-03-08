import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { EmployeeRepository } from "../repository/employee.repository";
import { SimpleEmployeeTo } from "../model/SimpleEmployeeTo";
import { TerminalRepository } from "../repository/terminal.repository";
import { TerminalTo } from "../model/TerminalTo";
@Injectable()
export class TerminalService {

    constructor(private terminalRepository: TerminalRepository) { }

    getDailyTerminalTo(): Observable<TerminalTo> {
        return this.terminalRepository.getDailyTerminalTo();
    }

}
