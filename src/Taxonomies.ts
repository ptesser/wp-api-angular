import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WpApiParent } from './Parent';
import { WpApiLoader } from './Loaders';

@Injectable()
export class WpApiTaxonomies extends WpApiParent {
  constructor(
    protected readonly wpApiLoader: WpApiLoader,
    protected readonly http: HttpClient
  ) {
    super(wpApiLoader, http);
  }

  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
