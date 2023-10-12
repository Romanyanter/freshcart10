import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _HttpClient:HttpClient) {}
  getAllprodectBrand():Observable<any>{
  return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands');
  }
  spiceifyprdect(id:any):Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands/'+id)}
}
