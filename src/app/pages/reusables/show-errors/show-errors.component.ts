import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';
@Component({
  selector: 'show-errors',
  styleUrls: ['./show-errors.component.scss'],
  template: `
  <ul *ngIf="shouldShowErrors()">
    <li *ngFor="let error of listOfErrors()">{{error}}</li>
  </ul>
  `,
})
export class ShowErrorsComponent {
  @Input()
  private control: AbstractControlDirective | AbstractControl;

  private static readonly errorMessages = {
    'required': () => 'To pole jest wymagane',
    'minlength': (params) => 'Minimalna ilość znaków to ' + params.requiredLength,
    'maxlength': (params) => 'Maksymalna ilość znaków to ' + params.requiredLength,
    'pattern': (params) => 'Wymagany wzór to ' + params.requiredPattern,
  };

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors
      && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }


}
