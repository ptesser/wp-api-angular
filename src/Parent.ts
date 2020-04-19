import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiLoader } from './Loaders';

@Injectable({
  providedIn: 'root',
})
export class WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient,
  ) {
  }

  httpGet(url: string, options = {}) {
    return this.http.get(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpHead(url: string, options = {}) {
    return this.http.head(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
}
