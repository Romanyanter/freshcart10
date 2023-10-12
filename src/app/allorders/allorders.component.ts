import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {
  allorders: any[] = [];
  constructor(private _OrdersService: OrdersService) {}
  ngOnInit(): void {
    this._OrdersService.Allorders().subscribe({
      next: (res) => {
        console.log(res.data);
        this.allorders = res.data;
      
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
}
