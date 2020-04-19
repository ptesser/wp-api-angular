import { Observable } from 'rxjs';
// import { any } from '@angular/http/src/interfaces';
// import { Response } from '@angular/http/src/static_response';


export interface IParent {
  httpGet(url: string, options?: any): Observable<Response>;
  httpHead(url: string, options?: any): Observable<Response>;
  httpDelete(url: string, options?: any): Observable<Response>;
  httpPost(url: string, body: any, options?: any): Observable<Response>;
  httpPut(url: string, body: any, options?: any): Observable<Response>;
  httpPatch(url: string, body: any, options?: any): Observable<Response>;
}

export interface IWpApiPosts {
  getList(options?: any): Observable<Response>;
  get(postId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(postId: number, body: any, options?: any): Observable<Response>;
  delete(postId: number, options?: any): Observable<Response>;
  getMetaList(postId: number, options?: any): Observable<Response>;
  getMeta(postId: number, metaId: number, options?: any): Observable<Response>;
  getRevisionList(postId: number, options?: any): Observable<Response>;
  getRevision(postId: number, revisionId: number, options?: any): Observable<Response>;
  getCategoryList(postId: number, options?: any): Observable<Response>;
  getCategory(postId: number, categoryId, options?: any): Observable<Response>;
  getTagList(postId: number, options?: any): Observable<Response>;
  getTag(postId: number, tagId, options?: any): Observable<Response>;
}

export interface IWpApiPages {
  getList(options?: any): Observable<Response>;
  get(pageId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(pageId: number, body: any, options?: any): Observable<Response>;
  delete(pageId: number, options?: any): Observable<Response>;
  getMetaList(pageId: number, options?: any): Observable<Response>;
  getMeta(pageId: number, metaId: number, options?: any): Observable<Response>;
  getRevisionList(pageId: number, options?: any): Observable<Response>;
  getRevision(pageId: number, revisionId: number, options?: any): Observable<Response>;
}

export interface IWpApiComments {
  getList(options?: any): Observable<Response>;
  get(commentId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(commentId: number, body: any, options?: any): Observable<Response>;
  delete(commentId: number, options?: any): Observable<Response>;
}

export interface IWpApiTypes {
  getList(options?: any): Observable<Response>;
  get(postType: string, options?: any): Observable<Response>;
}

export interface IWpApiMedia {
  getList(options?: any): Observable<Response>;
  get(mediaId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(mediaId: number, body: any, options?: any): Observable<Response>;
  delete(mediaId: number, options?: any): Observable<Response>;
}

export interface IWpApiUsers {
  getList(options?: any): Observable<Response>;
  me(options?: any): Observable<Response>;
  get(userId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(userId: number, body: any, options?: any): Observable<Response>;
  delete(userId: number, options?: any): Observable<Response>;
}

export interface IWpApiTaxonomies {
  getList(options?: any): Observable<Response>;
  get(taxonomiesType: string, options?: any): Observable<Response>;
}

export interface IWpApiStatuses {
  getList(options?: any): Observable<Response>;
  get(statusesName: string, options?: any): Observable<Response>;
}

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: any): Observable<Response>;
  get(taxonomiesType: string, termId: number, options?: any): Observable<Response>;
  create(taxonomiesType: string, body: any, options?: any): Observable<Response>;
  update(taxonomiesType: string, termId: number, body: any, options?: any): Observable<Response>;
  delete(taxonomiesType: string, termId: number, options?: any): Observable<Response>;
}

export interface IWpApiCustom {
  getList(options?: any): Observable<Response>;
  get(customId: number, options?: any): Observable<Response>;
  create(body: any, options?: any): Observable<Response>;
  update(customId: number, body: any, options?: any): Observable<Response>;
  delete(customId: number, options?: any): Observable<Response>;
}
