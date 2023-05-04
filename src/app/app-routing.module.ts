import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { HomeComponent } from './front/home/home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ListCourseComponent } from './admin/list-course/list-course.component';
import { CategoryProduct } from './models/category-product';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductsComponent } from './front/shop/products/products.component';
import { AddCourseComponent } from "./admin/add-course/add-course.component";
import { LibElmListComponent } from './admin/lib-elm-list/lib-elm-list.component';
import { ListLibcatComponent } from './admin/list-libcat/list-libcat.component';
import { AddLibElementComponent } from './admin/add-lib-element/add-lib-element.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseClientComponent } from './front/course-client/course-client.component';
import { CourseListClientComponent } from './front/course-list-client/course-list-client.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ResetPasswordComponents } from './auth/forget-password/forget-password.component';
import { CartComponent } from './front/shop/cart/cart.component';
import { ProductbycatComponent } from './front/shop/productbycat/productbycat.component';
import { ProjectComponentComponent } from './front/project/project-component/project-component.component';
import { EmptyPageComponent } from './front/empty-page/empty-page.component';
import { CourseComponent } from './front/course/course.component';
import { ProductCommentComponent } from './front/shop/product-comment/product-comment.component';
import { BackOfficeComponent } from './admin/back-office/back-office.component';
import { JitsiComponent } from './front/meet/meetpanel/meet.component';
import { QuitComponent } from './front/meet/quit/quit.component';
import { WishlistComponent } from './front/shop/wishlist/wishlist.component';




const routes: Routes = [
//General empty page and its children FRONT
{path: '', component: HomeComponent},
{path : 'p', component:EmptyPageComponent,
children: [
  {
    path : 'project',
    component: ProjectComponentComponent

  },
  {path : 'course' , component: CourseComponent},

  //shop routes
  {path:'shop', component: ProductsComponent},
  {path: 'products/:id', component: SingleProductComponent},
  {path: 'cart-details', component: CartComponent},
  { path: 'listProduct/:id', component: ProductbycatComponent },
  {path:'favoriteProduct', component: WishlistComponent},


]},
{ path: 'courses-client', component: CourseClientComponent },
{ path: 'courses-list/:id', component: CourseListClientComponent },








//{path: 'order-history', component: OrderHistoryComponent},

   {path:'product-comment',component: ProductCommentComponent},

  //{path:'favoriteProduct', component: WishListComponent},
  { path: 'listProduct/:id', component: CategoryProduct },
  { path: 'listUser', component: UserListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'forget', component: ResetPasswordComponent },
  {path: 'signup', component: SignUpComponent},
   {path: 'reset',component: ResetPasswordComponents},


  //Projects Part

  { path: 'auth', component: AuthComponent },
  { path: 'Forget', component: ResetPasswordComponent },
  { path: 'sign', component: SignUpComponent },



  //admin routes
  {path: 'admin', component: BackOfficeComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path:'project', loadChildren: () => import('./admin/project/project-mod.module').then(m => m.ProjectModModule)},

    //product routes
{ path: 'listUser', component: UserListComponent },
{ path: 'updateProduct/:id', component: UpdateProductComponent },
{path: 'addCategory', component: AddcategoryComponent},
{path: 'listCategory', component: ListCategoryComponent},
    {path: 'product/add', component: AddProductComponent},
{ path: 'listProduct', component: ListProductComponent },
{ path: 'addCourse', component: AddCourseComponent },
{ path: 'listCourse', component: ListCourseComponent },
  ]},

  {path: 'meet', component: JitsiComponent},
  {path:'quit' , component: QuitComponent},



  { path: 'libelem', component: LibElmListComponent },
  { path: 'libcat', component: ListLibcatComponent },
  { path: 'addlib', component: AddLibElementComponent },
  { path: 'updateCourse', component: UpdateCourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
