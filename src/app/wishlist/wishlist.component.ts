import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { CartServersService } from '../cart-servers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  prodectwshlist: any[] = [];

  constructor(
    private _WishlistService: WishlistService,
    private __CartServersService: CartServersService,
    private toastr: ToastrService
  ) {}
  showSuccess() {
    this.toastr.success('Prodect Add to Cart successfully');
  }
  showSuccesses() {
    this.toastr.error('Product removed successfully to your wishlist');
  }
  ngOnInit(): void {
    this._WishlistService.GetLoggedusercart().subscribe({
      next: (response) => {
        console.log('can subscrip');
        this.prodectwshlist = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addtoprodectCart(prodectIdData: any) {
    this.__CartServersService.addprodecttocart(prodectIdData).subscribe({
      next: (respone) => {
        console.log(respone.numOfCartItems);
        console.log(prodectIdData);
        this.showSuccess();
        this.__CartServersService.itemconterIncart.next(respone.numOfCartItems);
        this.removeprodectfromwshlists(prodectIdData)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeprodectfromwshlist(id: any) {
    this._WishlistService.removeprodectwshlist(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.showSuccesses();
        this.prodectwshlist =  this.prodectwshlist.filter((item) =>
          response.data.includes(item._id))
        },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeprodectfromwshlists(id: any) {
    this._WishlistService.removeprodectwshlist(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.prodectwshlist =  this.prodectwshlist.filter((item) =>
          response.data.includes(item._id))
        },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
