import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit, Input } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'additional-info-form',
  styleUrls: ['./additional-info-form.component.scss'],
  templateUrl: './additional-info-form.component.html',
})
export class AdditionalInfoFormComponent implements OnInit {
  private more = "Rozwiń";

  @Input() additionalInfo: FormGroup;
  @Input() selectedOrderLocationType: string;

  constructor() { }
  ngOnInit(): void {
  }

  showMore() {
    this.more == "Ukryj" ? this.more = "Rozwiń" : this.more = "Ukryj";
  }

}
