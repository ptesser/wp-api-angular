import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';

export class Custom extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
    public entityName: string
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/${this.entityName}`, options)
  }
  get(customId: number, options = {}) {
    return this.httpGet(`/${this.entityName}/${customId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}`, body, options)
  }
  update(customId: number, body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}/${customId}`, body, options)
  }
  delete(customId: number, options = {}) {
    return this.httpDelete(`/${this.entityName}/${customId}`, options)
  }
}


@Injectable({
  providedIn: 'root',
})
export class WpApiCustom extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
  ) {
    super(wpApiLoader, http);
  }

  getInstance(entityName = '') {
    if (typeof entityName !== 'string') {
      throw new Error(`getInstance needs an entity name`);
    }
    return new Custom(this.wpApiLoader, this.http, entityName);
  }
}
