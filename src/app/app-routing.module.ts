import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdectdatalisComponent } from './prodectdatalis/prodectdatalis.component';
import { authontactionGuard } from './authontaction.guard';
import { DatailesBrandComponent } from './datailes-brand/datailes-brand.component';
import { DatailscategoriesComponent } from './datailscategories/datailscategories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { RegisterComponent } from './register/register.component';
import { RestercodeComponent } from './restercode/restercode.component';




const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authontactionGuard] },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [authontactionGuard],
  },

  {
    path: 'prodectdatalis/:prodectid/:prodectname',
    component: ProdectdatalisComponent,
    canActivate: [authontactionGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [authontactionGuard] },
  {
    path: 'brands',
    component: BrandsComponent,
    canActivate: [authontactionGuard],
  },
  {
    path: 'checkout/:cartid',
    component: CheckoutComponent,
    canActivate: [authontactionGuard],
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [authontactionGuard],
  },
  {
    path: 'restercode',
    component: RestercodeComponent,
  },

  {
    path: 'datailes-brand/:prodectid/:prodectname',
    component: DatailesBrandComponent,
    canActivate: [authontactionGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [authontactionGuard],
  },
  {
    path: 'allorders',
    component: AllordersComponent,
    canActivate: [authontactionGuard],
  },
  
  {
    path: 'datailscategories/:prodectid/:prodectname',
    component: DatailscategoriesComponent,
    canActivate: [authontactionGuard],
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
