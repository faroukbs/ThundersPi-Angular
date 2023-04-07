import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { ListProductComponent } from './front/shop/list-product/list-product.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { Routes } from '@angular/router';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';

const routes: Routes = [
  {path: 'shop', component: ListProductComponent},
  {path:'shop/:id', component: SingleProductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductComponent,
    SingleProductComponent,
    CategoryProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
