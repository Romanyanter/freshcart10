import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavberComponent } from './navber/navber.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProdectdatalisComponent } from './prodectdatalis/prodectdatalis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SilderComponent } from './silder/silder.component';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { DatailesBrandComponent } from './datailes-brand/datailes-brand.component';
import { DatailscategoriesComponent } from './datailscategories/datailscategories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeadersInterceptor } from './headers.interceptor';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { RestercodeComponent } from './restercode/restercode.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavberComponent,
    NotfoundComponent,
    ProductsComponent,
    RegisterComponent,
    ProdectdatalisComponent,
    SilderComponent,
    SearchPipe,
    DatailesBrandComponent,
    DatailscategoriesComponent,
    WishlistComponent,
    CheckoutComponent,
    AllordersComponent,
    RestercodeComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
