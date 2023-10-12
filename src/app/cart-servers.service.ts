import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServersService {
  itemconterIncart = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) {}
  addprodecttocart(prodectIdData: any): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {
        productId: prodectIdData,
      }
    );
  }
  getloggedUSerCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart');
  }
  romovesepecificCartItem(PId: any): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${PId}`
    );
  }
  Updatecartproductquantity(PId: any, counter: any): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${PId}`,
      {
        count: counter,
      }
    );
  }
  removecart(): Observable<any> {
    return this._HttpClient.delete(
      'https://ecommerce.routemisr.com/api/v1/cart'
    );
  }
  onlinepaymant(cartid: any, shippingAddersss: any) {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200`,{
        shippingAddress:shippingAddersss,
      }
    )
  }
}
