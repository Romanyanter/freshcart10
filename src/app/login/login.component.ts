import { Component } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthonticationService:AuthonticationService, private _Router:Router){}
  islooding: boolean = false;
  isappert: boolean = false;
  issucces: boolean = false;
  massegaerror: string = '';
  messagesucces: string = '';
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(6),
    ]),
    
  })
  login(from:any){
    this.islooding = true;
    
    
    if(from.valid){
      this._AuthonticationService.login(from.value).subscribe({
        next:(response)=>{
          console.log(response);
          this.islooding = false;
          this.isappert = false;
          this.issucces = true;
          this._Router.navigate(['/home'])
          this.messagesucces = response.message;
          localStorage.setItem('token',response.token);
          this._AuthonticationService.islogin.next(true);
        },
        error:(err)=>{
          console.log(err);
          this.islooding = false;
          this.massegaerror = err.error.message;
          this.isappert = true;
          this.issucces = false;
          
        }
      })

    }
    

  }

}
