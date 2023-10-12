import { Component, OnInit } from '@angular/core';
import { ProdectsapiService } from '../prodectsapi.service';
import { prodect } from '../prodects';
import { ToastrService } from 'ngx-toastr';
import { CartServersService } from '../cart-servers.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProdectsapiService: ProdectsapiService,
    private _CartServersService: CartServersService,
    private toastr: ToastrService
  ) {}
  showSuccess() {
    this.toastr.success('Prodect Add to Cart successfully');
  }
  prodectList: prodect[] = [];
  searchword:string='';
  ngOnInit(): void {
    this._ProdectsapiService.getAllprodects().subscribe({
      next: (respons) => {
        console.log(respons.data);
        this.prodectList = respons.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addtoprodectCart(prodectIdData: any) {
    this._CartServersService.addprodecttocart(prodectIdData).subscribe({
      next: (respone) => {
        console.log(respone.numOfCartItems);
        console.log(prodectIdData);
        this.showSuccess();
        this._CartServersService.itemconterIncart.next(respone.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
