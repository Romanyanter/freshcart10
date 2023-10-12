import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthticationService } from '../authtication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restercode',
  templateUrl: './restercode.component.html',
  styleUrls: ['./restercode.component.scss'],
})
export class RestercodeComponent {
  forgetPassword!: FormGroup;
  verifyCode!: FormGroup;
  resetPassword!: FormGroup;
  first: boolean = true;
  seconde: boolean = false;
  done: boolean = false;
  isloader = false;

  @ViewChild('form1') form1!: ElementRef;
  @ViewChild('form2') form2!: ElementRef;
  @ViewChild('form3') form3!: ElementRef;
  errMsg: any;
  email: string = '';

  constructor(
    private _AuthticationService: AuthticationService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.forgetPassword = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

    this.verifyCode = new FormGroup({
      resetCode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{6}$/),
      ]),
    });

    this.resetPassword = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w{6,}$/),
      ]),
    });
  }
  ForgetPassword(form: FormGroup) {
    this.isloader = true;
    if (form.valid) {
      console.log(form.value);
      this._AuthticationService.ForgotPassword(form.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.statusMsg === 'success') {
            this.errMsg = response.message;
            this.isloader = false;
            form.disable();
            this.email = form.get('email')?.value;
            this.first = false;
            this.seconde = true;
          }
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isloader = false;
        },
      });
    }
  }

  handleVerifyResetCode(verifyCode: FormGroup): void {
    this.isloader = true;
    if (verifyCode.valid) {
      console.log(verifyCode.value);
      this._AuthticationService.VerifyResetCode(verifyCode.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status === 'Success') {
            this.errMsg = res.status;
            this.isloader = false;
            this.verifyCode.disable();
            this.seconde = false;
            this.done = true;
            this.resetPassword.get('email')?.setValue(this.email);
            this.resetPassword.get('email')?.disable();
          }
        },
        error: (err: { error: { message: any } }) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isloader = false;
        },
      });
    }
  }
  handleResetPassword(resetPassword: FormGroup): void {
    this.isloader = true;
    if (resetPassword.valid) {
      console.log(resetPassword.value);
      const userData = {
        email: this.email,
        newPassword: resetPassword.get('newPassword')?.value,
      };
      this._AuthticationService.ResetPassword(userData).subscribe({
        next: (res) => {
          console.log(res);
          setTimeout(() => {
            this._Router.navigate(['/home']);
          }, 1000);
          this.errMsg = res.message;
          this.isloader = false;
          resetPassword.disable();
        },
        error: (err) => {
          console.log(err);
          this.errMsg = err.error.message;
          this.isloader = false;
        },
      });
    }
  }
}
