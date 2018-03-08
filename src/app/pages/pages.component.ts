import { NbAuthJWTToken } from '../nb-auth/services/token.service';
import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS, MENU_ITEMS_MANAGER } from './pages-menu';
import { NbAuthService } from '../nb-auth/index';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  private user;
  private menu;
  constructor(
    private authService: NbAuthService
  ) { }


  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.getValue()) {
          this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 11
          let isManager;
          this.user.roles.forEach(role => {
            if (role.authority == "ROLE_ADMIN") { isManager = true; }
          });
          isManager ? this.menu = MENU_ITEMS_MANAGER : this.menu = MENU_ITEMS;

        }
      });
  }


}
