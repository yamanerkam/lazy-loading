import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'add', component: AddProductComponent },
      { path: ':id', component: DetailProductComponent },
      { path: '', component: ListProductComponent },
    ])
  ]
})
export class ProductsModule { }
