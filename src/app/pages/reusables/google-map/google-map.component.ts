import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'google-map',
  styleUrls: ['./google-map.component.scss'],
  templateUrl: './google-map.component.html',
})
export class GoogleMapComponent implements OnInit, OnDestroy {
  config: ToasterConfig;

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: true,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);

  }
}
