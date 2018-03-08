import { Component, OnInit, Input } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../@core/modules/restaurant-and-finance-and-employee/service/employee.service';
import { SimpleEmployeeTo } from '../../../@core/modules/restaurant-and-finance-and-employee/model/SimpleEmployeeTo';
@Component({
  selector: 'change-transportation-form',
  styleUrls: ['./change-transportation-form.component.scss'],
  templateUrl: './change-transportation-form.component.html',
})
export class ChangeTransportationFormComponent {
  private drivers: SimpleEmployeeTo[] = [];
  private driverClicked: SimpleEmployeeTo;
  private driverRadioButtonValue = null;
  private more = "Rozwiń";

  @Input() changeTransportation: FormGroup;

  constructor(private employeeService: EmployeeService) { }


  toggleRadioButton(event) {
    if (event.target.checked) {
      this.driverRadioButtonValue = null;
    }
  }

  showMore() {
    this.employeeService.getOnlineDriversEmployee().subscribe(data => this.drivers = data);
    this.more == "Ukryj" ? this.more = "Rozwiń" : this.more = "Ukryj";
  }

}
