import { Component} from '@angular/core';
import { AuthticationService } from '../authtication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatapassword',
  templateUrl: './updatapassword.component.html',
  styleUrls: ['./updatapassword.component.scss'],
})
export class UpdatapasswordComponent {
  constructor(
    private _AuthticationService: AuthticationService,
    private _Router: Router,
    private toastr: ToastrService
  ) {}
  errMasg: any;
  isLoading: boolean = false;
  errmsg:boolean = false;
  updatePasswordId: any;
  showSuccess() {
    this.toastr.success('The password has been changed successfully');
  }
  error() {
    this.toastr.error('User recently changed password! Please login again');
  }
  
    restertpassord:FormGroup = new FormGroup({
      currentPassword: new FormControl(null,[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
      ]),
      rePassword: new FormControl(null,[
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
      ]),
    });

  handelubdatapassord() {
    const userdata = this.restertpassord.value;
    if (this.restertpassord.valid) {
      this.updatePasswordId = this._AuthticationService
        .updatapassowrd(userdata)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res.message === 'success') {
              this._Router.navigate(['/home']);
              this.errMasg = res.message;
              this.showSuccess();
              this.isLoading = true;
            }
          },
          error: (err) => {
            console.log(err);
            this.errMasg = err.error.message;
            this.error();
            this.isLoading = false;
            this.errmsg = true
          },
        });
    }
  }
  ngOnDestroy(): void {
    if (this.updatePasswordId) {
      this.updatePasswordId.unsubscribe();
    }
  }
}
