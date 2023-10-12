import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _CategoriesService:CategoriesService){}
  prodectALL:any[]=[];
  ngOnInit(): void {
    this._CategoriesService.getprodect().subscribe({
      next:(response)=>{console.log(response.data);
        this.prodectALL = response.data;
      },
      error:(err)=>{console.log(err);
      }
    })
    
  }

}
