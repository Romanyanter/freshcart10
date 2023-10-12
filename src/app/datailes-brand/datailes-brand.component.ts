import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datailes-brand',
  templateUrl: './datailes-brand.component.html',
  styleUrls: ['./datailes-brand.component.scss'],
})
export class DatailesBrandComponent implements OnInit {
  constructor(private _BrandService: BrandService,private _ActivatedRoute:ActivatedRoute) {}
  prodectbrand: any;
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params?.['prodectid']
    this._BrandService.spiceifyprdect(id).subscribe((response) => {
      this.prodectbrand = response.data;
      console.log(response.data.imageCover);

    });
  }
}
