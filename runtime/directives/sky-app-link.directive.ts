// import { Directive, Input } from '@angular/core';
// import { LocationStrategy } from '@angular/common';
// import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { SkyAppConfig } from '../config';

// @Directive({
//   selector: '[skyAppLink]'
// })
export class SkyAppLinkDirective /*extends RouterLinkWithHref*/ {
  private _queryParams: { [k: string]: any };

  // @Input()
  set skyAppLink(commands: any[] | string) {
    // this.routerLink = commands;
  }

  // @Input()
  set queryParams(params: { [k: string]: any }) {
    this._queryParams = Object.assign(params, this.skyAppConfig.runtime.params.getAll());
  }

  get queryParams() {
    if (!this._queryParams) {
      this._queryParams = Object.assign({}, this.skyAppConfig.runtime.params.getAll());
    }
    return this._queryParams;
  }

  constructor(
    router: any, // Router,
    route: any, // ActivatedRoute,
    locationStrategy: any, // LocationStrategy,
    private skyAppConfig: SkyAppConfig
  ) {
    // super(router, route, locationStrategy);
  }
}
