import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { ListProductComponent } from './front/shop/list-product/list-product.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
