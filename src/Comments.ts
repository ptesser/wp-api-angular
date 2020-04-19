import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';

@Injectable()
export class WpApiComments extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/comments`, options)
  }
  get(commentId: number, options = {}) {
    return this.httpGet(`/comments/${commentId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/comments`, body, options)
  }
  update(commentId: number, body = {}, options = {}) {
    return this.httpPost(`/comments/${commentId}`, body, options)
  }
  delete(commentId: number, options = {}) {
    return this.httpDelete(`/comments/${commentId}`, options)
  }
}
