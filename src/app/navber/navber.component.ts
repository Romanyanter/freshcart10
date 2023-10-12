import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import jwtDecode from 'jwt-decode';
import { CartServersService } from '../cart-servers.service';

@Component({
  selector: 'app-navber',
  templateUrl: './navber.component.html',
  styleUrls: ['./navber.component.scss'],
})
export class NavberComponent implements OnInit {
  constructor(private _AuthonticationService: AuthonticationService,private _CartServersService:CartServersService) {}
  userNAme: string = '';
  localstorgetoken: any;
  UserData: any;
  enableNavber: boolean = false;
  nameOffcart:any =0;
  makelogout() {
    this._AuthonticationService.logout();
  }
  ngOnInit(): void {
    this._CartServersService.itemconterIncart.subscribe(((val)=>{
      if (localStorage.getItem('token') !== null) {
        this.localstorgetoken = localStorage.getItem('token');
        this.nameOffcart = jwtDecode(this.localstorgetoken);
        this.nameOffcart=val;
      }
    }))
    this._AuthonticationService.islogin.subscribe((vale) => {
      this.enableNavber = vale;
      if (localStorage.getItem('token') !== null) {
        this.localstorgetoken = localStorage.getItem('token');
        this.UserData = jwtDecode(this.localstorgetoken);
        this.userNAme = this.UserData.name;
        

        console.log(this.UserData.name);
      }
    });
  }
}
