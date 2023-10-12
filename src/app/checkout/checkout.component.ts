import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartServersService } from '../cart-servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  cartid: any = this._ActivatedRoute.snapshot.params?.['cartid'];

  constructor(
    private _CartServersService: CartServersService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  shipingAddressForm: FormGroup = new FormGroup({
    Details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}/),
    ]),
    city: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]/),
    ]),
  });
  redyrecttopayment(url:any){
    location.href = url;

  }

  checkout(from: any) {
    if (from.valid) {
      this._CartServersService
        .onlinepaymant(this.cartid, from.value)
        .subscribe({
          next: (response:any) => {
            console.log(response);
            this.redyrecttopayment(response.session.url);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }else{
      alert(" Please Enter Correct Form")
    }
  }
}
