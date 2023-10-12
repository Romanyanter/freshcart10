import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdectsapiService {
  constructor(private _HttpClient: HttpClient) {}
  getAllprodects(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }
  getAllcategrious(): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }
  getspcifyprodect(id:any): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/products/'+ id
    );
  }
  getspcifycategeros(id:any): Observable<any> {
    return this._HttpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories/'+ id
    );
  }
}
