import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', loadChildren: () => import("./components/customer/customer.module").then(m => m.CustomerModule) },
  { path: 'product', loadChildren: () => import("./components/products/products.module").then(m => m.ProductsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
