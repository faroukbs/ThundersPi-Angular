import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { ListProductComponent } from './front/shop/list-product/list-product.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { Routes } from '@angular/router';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

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
    CategoryProductComponent,
    AddProductComponent,
    AddcategoryComponent,
    DashboardComponent,
    ListCategoryComponent,
    NavbarComponent,
    SidebarComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
