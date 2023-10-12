import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdata } from './userdata';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthonticationService {
  islogin = new BehaviorSubject(false);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.islogin.next(true);
    
      
    }
    else{
      this.islogin.next(false)

    }
  }

  sineup(data: Userdata): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin ',
      data
    );
  }
  logout() {
    this._Router.navigate(['/login']);
    this.islogin.next(false);
    localStorage.removeItem('token');
  }
}
