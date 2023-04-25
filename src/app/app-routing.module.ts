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
import { CartComponent } from './front/shop/cart/cart.component';
import { ProductbycatComponent } from './front/shop/productbycat/productbycat.component';
import { ProjectComponentComponent } from './front/project/project-component/project-component.component';
import { EmptyPageComponent } from './front/empty-page/empty-page.component';
import { CourseComponent } from './front/course/course.component';
import { ProductCommentComponent } from './front/shop/product-comment/product-comment.component';
import { ProjectBackComponent } from './admin/project/project-back/project-back.component';
import { AddProjectComponent } from './admin/project/add-project/add-project.component';
import { ProjectListBackComponent } from './admin/project/project-list-back/project-list-back.component';
import { AddProjectFileComponent } from './admin/project/add-project-file/add-project-file.component';
import { BackOfficeComponent } from './admin/back-office/back-office.component';

const routes: Routes = [
//General empty page and its children FRONT
{path: '', component: HomeComponent},
  {path : 'p', component:EmptyPageComponent,
children: [
  {
    path : 'project', 
    component: ProjectComponentComponent
    
  },
  {path : 'course' , component: CourseComponent}
  
]},
{ path: 'listProduct/:id', component: ProductbycatComponent },

  {path: 'products/:id', component: SingleProductComponent},
   {path:'shop', component: ProductsComponent},
   {path: 'shopdet', component: SingleProductComponent},
   {path: 'cart-details', component: CartComponent},

  
   
   
//{path: 'order-history', component: OrderHistoryComponent}, 

   {path:'product-comment',component: ProductCommentComponent},

  //{path:'favoriteProduct', component: WishListComponent},
  { path: 'listProduct/:id', component: CategoryProduct },
  
  { path: 'auth', component: AuthComponent },
  { path: 'Forget', component: ResetPasswordComponent },
  { path: 'sign', component: SignUpComponent },

  //Project routes
  {path :'project' ,component: ProjectComponentComponent},


  //admin routes
  {path: 'admin', component: BackOfficeComponent, children: [
    {path: '', component: DashboardComponent},
    { path : 'project/add', component:AddProjectComponent},
    { path : 'project', component:ProjectListBackComponent},
    { path : 'project/:id', component:ProjectBackComponent},

    
    //product routes
    {path: 'product/add', component: AddProductComponent},
    { path: 'listProduct', component: ListProductComponent },
    { path: 'listUser', component: UserListComponent },
    { path: 'updateProduct/:id', component: UpdateProductComponent },
    {path: 'addCategory', component: AddcategoryComponent},
    {path: 'listCategory', component: ListCategoryComponent},


  ]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
