import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { Datum } from '../brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  prodectAll:Datum[] = [];
  constructor(private _BrandService:BrandService){}
  ngOnInit(): void {
    this._BrandService.getAllprodectBrand().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.prodectAll = response.data;
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
    
  }

}
