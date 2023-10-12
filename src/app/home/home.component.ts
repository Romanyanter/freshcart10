import { Component, OnInit } from '@angular/core';
import { ProdectsapiService } from '../prodectsapi.service';
import { prodect } from '../prodects';
import { catagroue } from '../datacategore';
import { CartServersService } from '../cart-servers.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodectList:prodect[] = [];
  catagrou:catagroue[] = [];
  searchword:string='';
  wishlist:any= true;
  
  

  constructor(public _ProdectsapiService: ProdectsapiService,private _CartServersService:CartServersService,
    private toastr:ToastrService,private _WishlistService:WishlistService) {}
  showSuccess() {
    this.toastr.success('Prodect Add to Cart successfully');
  }
  showSuccesswshlist() {
    this.toastr.success('Prodect Add to Wshlist successfully');
  }
  showerrorlist() {
    this.toastr.error('item Delete');
  }
  
  ngOnInit(): void {
    this._ProdectsapiService.getAllprodects().subscribe({
      next: (response) => {
        console.log(response.data);
        this.prodectList = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._ProdectsapiService.getAllcategrious().subscribe((respose=>{console.log(respose.data);
    this.catagrou = respose.data
    }))
  };
  addtoprodectCart(prodectIdData:any){
    this._CartServersService.addprodecttocart(prodectIdData).subscribe({
      next:(respone)=>{console.log(respone.numOfCartItems);
        console.log(prodectIdData);
        this.showSuccess();
        this._CartServersService.itemconterIncart.next(respone.numOfCartItems);
        
        
      },
      error:(err)=>{console.log(err);
      }

      
      
    })
  }
  addprodectWshlist(prodectid:any){
    this._WishlistService.Addprodectwshlist(prodectid).subscribe({
      next:(response)=>{
        console.log(prodectid);
        
        console.log(response.data);
        this.showSuccesswshlist();
      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }
  RemovefromWishlist(id:any){
    this._WishlistService.removeprodectwshlist(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.wishlist = response.data;
      },error:(err)=>{
        console.log(err);
        

      }
    })
  }
}