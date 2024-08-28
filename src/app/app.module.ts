import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DetailProductComponent,
    ListProductComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    DetailCustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
