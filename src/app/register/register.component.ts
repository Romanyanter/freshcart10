import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private _AuthonticationService: AuthonticationService,
    private _Router: Router
  ) {}
  islooding: boolean = false;
  isappert: boolean = false;
  issucces: boolean = false;
  massegaerror: string = '';
  messagesucces: string = '';

  rgisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(6),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(6),
    ]),
    phone: new FormControl(null, [Validators.pattern(/^01[0125][0-9]{8}/)]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(6),
    ]),
  });
  sigUp(Fromit: any) {
    this.islooding = true;
    console.log(Fromit);
    if (
      Fromit.valid &&
      Fromit.get('password').value === Fromit.get('rePassword').value
    ) {
      console.log(Fromit.value);
      this._AuthonticationService.sineup(Fromit.value).subscribe({
        next: (respone) => {
          this.islooding = false;
          this.isappert = false;
          this.issucces = true;
          this.messagesucces = respone.message;
          this._Router.navigate(['/login'])
          console.log(respone);
        },
        error: (err) => {
          this.islooding = false;
          this.massegaerror = err.error.message;
          this.isappert = true;
          this.issucces = false;
          console.log(err);
        },
      });
    } else {
      console.log('Fromit invalid');
    }
  }
}
