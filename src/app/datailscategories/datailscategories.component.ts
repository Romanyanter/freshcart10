import { Component, OnInit } from '@angular/core';
import { ProdectsapiService } from '../prodectsapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datailscategories',
  templateUrl: './datailscategories.component.html',
  styleUrls: ['./datailscategories.component.scss'],
})
export class DatailscategoriesComponent implements OnInit {
  constructor(
    private _ProdectsapiService: ProdectsapiService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  Allprodect: any;
  ngOnInit(): void {
    let id = this._ActivatedRoute.snapshot.params?.['prodectid'];
    this._ProdectsapiService.getspcifycategeros(id).subscribe((response) => {
      console.log(response.data);
      this.Allprodect = response.data;
    });
  }
}
