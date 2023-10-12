import { Component, OnInit } from '@angular/core';
import { CartServersService } from '../cart-servers.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartData: any = [];
  tottalprice: any = 0;
  islooding:boolean = false;
  
  cartid:any='';
  constructor(
    private _CartServersService: CartServersService,
    private ToastrService: ToastrService
  ) {}
  
  ngOnInit(): void {
    this._CartServersService.getloggedUSerCart().subscribe({
      next: (respones) => {
        console.log('can subscribe');
        this.cartData = respones.data.products;
        this.tottalprice = respones.data.totalCartPrice;
        this.cartid = respones.data._id;
        console.log(respones);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removitem(id: any) {
    this._CartServersService.romovesepecificCartItem(id).subscribe({
      next: (respones) => {
        this._CartServersService.itemconterIncart.next(respones.numOfCartItems);
        this.ToastrService.error('Item Deleted!');
        this.cartData = respones.data.products;
        this.tottalprice = respones.data.totalCartPrice;
        this.islooding = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Updatecartproductquantitypluse(id: any, counter: any) {
    this._CartServersService.Updatecartproductquantity(id, counter).subscribe({
      next: (respones) => {
        this.ToastrService.success('Item Counter Increase');
        this.cartData = respones.data.products;
        this.tottalprice = respones.data.totalCartPrice;
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Updatecartproductquantitymunis(id: any, counter: any) {
    this._CartServersService.Updatecartproductquantity(id, counter).subscribe({
      next: (respones) => {
        this.ToastrService.error('Item Counter decrease');
        this.cartData = respones.data.products;
        this.tottalprice = respones.data.totalCartPrice;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removecart() {
    this._CartServersService.removecart().subscribe({
      next: (respons) => {
        console.log(respons);
        this.cartData = '';
        this.tottalprice = '';
        this._CartServersService.itemconterIncart.next(0);
        this.ToastrService.error('cart Deleted!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
