import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  JwtDecode  from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthticationService {
token:string | null ;
  UserData: any;
constructor(private _httpClient:HttpClient ) {
  this.token= localStorage.getItem("userToken");
  if(this.token != null){
    this.getUserData()
  }}

getUserData(){
  let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
  let encoded= JwtDecode(encodedToken);
  console.log(encoded)
  this.UserData.next(encoded);
}

ForgotPassword(data:any): Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',data)
}
VerifyResetCode(data:any): Observable<any>{
  return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
}
ResetPassword(data:any): Observable<any>{
  return this._httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
}
}
