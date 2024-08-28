import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { HomeComponent } from './components/home/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customer/detail/:id', component: DetailCustomerComponent },
  { path: 'customer/list', component: ListCustomerComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/detail/:id', component: DetailProductComponent },
  { path: 'product/list', component: ListProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
