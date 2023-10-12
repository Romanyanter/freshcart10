import { Component, OnInit } from '@angular/core';
import { ProdectsapiService } from '../prodectsapi.service';
import { ActivatedRoute } from '@angular/router';
import { CartServersService } from '../cart-servers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prodectdatalis',
  templateUrl: './prodectdatalis.component.html',
  styleUrls: ['./prodectdatalis.component.scss'],
})
export class ProdectdatalisComponent implements OnInit {
  constructor(
    private _ProdectsapiService: ProdectsapiService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartServersService: CartServersService,
    private toastr: ToastrService
  ) {}
  prodectDatails: any;
  showSuccess() {
    this.toastr.success('Prodect Add to Cart successfully');
  }

  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params?.['prodectid'];

    this._ProdectsapiService.getspcifyprodect(id).subscribe((response) => {
      console.log(response.data);
      this.prodectDatails = response.data;
    });
  }
  addtoprodectCart(prodectIdData: any) {
    this._CartServersService.addprodecttocart(prodectIdData).subscribe({
      next: (respone) => {
        console.log(respone);
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
