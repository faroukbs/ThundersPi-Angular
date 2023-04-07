import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './front/shop/list-product/list-product.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';

const routes: Routes = [
  {path: 'shop', component: ListProductComponent},
  {path:'shop/:id', component: SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
