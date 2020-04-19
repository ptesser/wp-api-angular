import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';

@Injectable({
  providedIn: 'root',
})
export class WpApiTypes extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
  ) {
    super(wpApiLoader, http);
  }

  getList(options = {}) {
    return this.httpGet(`/types`, options)
  }
  get(postType: string, options = {}) {
    return this.httpGet(`/types/${postType}`, options)
  }
}
