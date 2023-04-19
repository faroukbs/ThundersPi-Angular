import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { HomeComponent } from './front/home/home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { CategoryProduct } from './models/category-product';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductsComponent } from './front/shop/products/products.component';

import { UserListComponent } from './admin/user-list/user-list.component'; 
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';



const routes: Routes = [
  {path: 'products/:id', component: SingleProductComponent},
  {path: '', component: HomeComponent},
   {path:'shop', component: ProductsComponent},
   {path: 'shopdet', component: SingleProductComponent},
  
   //{path: 'cart-details', component: CartDetailsComponent},
  // {path: 'checkout', component: CheckoutComponent},
   {path: 'add', component: AddProductComponent},
   { path: 'listProduct', component: ListProductComponent },
   { path: 'updateProduct/:id', component: UpdateProductComponent },
   {path: 'admin', component: DashboardComponent},
//{path: 'order-history', component: OrderHistoryComponent}, 
   {path: 'addCategory', component: AddcategoryComponent},
   {path: 'listCategory', component: ListCategoryComponent},

  //{path:'favoriteProduct', component: WishListComponent},
  { path: 'listProduct/:id', component: CategoryProduct },
  { path: 'listUser', component: UserListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'Forget', component: ResetPasswordComponent },
  {path: 'signup', component: SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
