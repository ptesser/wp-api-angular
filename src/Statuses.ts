import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';

@Injectable({
  providedIn: 'root',
})
export class WpApiStatuses extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/statuses`, options)
  }
  get(statusesName: string, options = {}) {
    return this.httpGet(`/statuses/${statusesName}`, options)
  }
}
