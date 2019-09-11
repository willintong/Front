import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import {ProductLoginComponent} from './product-login/product-login.component';
import {ProductHomeComponent} from './product-home/product-home.component';
import {CreateProductComponent} from './create-product/create-product.component';

const routes: Routes = [
  {path: '', component: ProductHomeComponent},
  { path: 'products', component: ProductListComponent},
  {path: 'home', component: ProductHomeComponent},
  {path: 'login', component: ProductLoginComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'create', component: CreateProductComponent},
  { path: 'products', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
