import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster/angular2-toaster';
import { Component, OnInit } from '@angular/core';
import 'style-loader!angular2-toaster/toaster.css';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { TerminalTo } from '../../@core/modules/restaurant-and-finance-and-employee/model/TerminalTo';
import { TerminalService } from '../../@core/modules/restaurant-and-finance-and-employee/service/terminal.service';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'terminal',
  styleUrls: ['./terminal.component.scss'],
  templateUrl: './terminal.component.html',
})
export class TerminalComponent implements OnInit, OnDestroy {
  config: ToasterConfig;
  terminalTo: TerminalTo = new TerminalTo();
  paymentMethod = [
    { name: 'Gotówka', value: 0, },
    { name: 'Karta', value: 0, },
    { name: 'Przelewy', value: 0, },
  ];
  orderLocationType = [
    { name: "Dostawa", value: 0 },
    { name: 'Wynos', value: 0 },
    { name: 'Lokal', value: 0 },
  ];
  ordersQuantity = [
    { name: 'Gotówka', value: 0, },
    { name: 'Karta', value: 0, },
    { name: 'Przelewy', value: 0, },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Typ';
  yAxisLabel = 'Zysk [zł]';

  constructor(private toasterService: ToasterService, private terminalService: TerminalService, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit(): void {
    this.terminalService.getDailyTerminalTo().subscribe(data => {
      this.terminalTo = data;
      if (this.terminalTo != null) {
        this.initializeData(this.terminalTo);
      }
    }, err => {
      if (err.status != 200) {
        this.showToast("error", "Serwer", "Problem w połączniu z serwerem");
      }
    })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  initializeData(terminalTo: TerminalTo) {
    this.paymentMethod = [
      { name: 'Gotówka', value: terminalTo.cashMoney, },
      { name: 'Karta', value: terminalTo.cardMoney, },
      { name: 'Przelewy', value: terminalTo.bankTransferMoney, },
    ];
    this.orderLocationType = [
      { name: "Dostawa", value: terminalTo.deliveriesMoney },
      { name: 'Wynos', value: terminalTo.takeawayMoney },
      { name: 'Lokal', value: terminalTo.localMoney },
    ];
    this.ordersQuantity = [
      { name: 'Dostawa', value: terminalTo.deliveriesOrdersQuantity, },
      { name: 'Wynos', value: terminalTo.takeawayOrdersQuantity, },
      { name: 'Lokal', value: terminalTo.localOrdersQuantity, },
    ];
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
