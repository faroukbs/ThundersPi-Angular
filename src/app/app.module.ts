import { ListProductComponent } from './admin/list-product/list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { FooterComponent } from './front/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductService } from './services/product.service';
import { WishListService } from './services/wish-list.service';
import { NavComponent } from './admin/nav/nav.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './front/shop/products/products.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

import { ProjectComponentComponent } from './front/project/project-component/project-component.component';
import { CartComponent } from './front/shop/cart/cart.component';
import { ProjectFileComponent } from './front/project/project-file/project-file.component';
import { ProjectSubmissionComponent } from './front/project/project-submission/project-submission.component';
import { QuizComponent } from './front/quiz/quiz/quiz.component';
import { QuizTakeComponent } from './front/quiz/quiz-take/quiz-take.component';
import { QuestionAnswerComponent } from './front/quiz/question-answer/question-answer.component';
import { QuestionAnswerUserComponent } from './front/quiz/question-answer-user/question-answer-user.component';
import { QuestionComponent } from './front/quiz/question/question.component';
import { ProductbycatComponent } from './front/shop/productbycat/productbycat.component';
import { ResetPasswordComponents } from './auth/forget-password/forget-password.component';
import { ProductCommentComponent } from './front/shop/product-comment/product-comment.component';
import { CourseComponent } from './front/course/course.component';
import { HeaderComponent } from './front/header/header.component';
import { EmptyPageComponent } from './front/empty-page/empty-page.component';
import { ProjectService } from './services/riadh/project.service';
import { QuizService } from './services/riadh/quiz.service';
import { BackOfficeComponent } from './admin/back-office/back-office.component';
import { ProjectComponent } from './admin/project/project.component';
import { ReviewComponent } from './front/shop/single-product/review/review.component';
import { RevComponent } from './front/shop/single-product/rev/rev.component';
//meet

import { JitsiComponent} from './front/meet/meetpanel/meet.component';
import { QuitComponent } from './front/meet/quit/quit.component';
// import { MeetService } from './services/meet.service';
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
    UpdateProductComponent,
    FooterComponent,
    NavComponent,
    ProductsComponent,
    UserListComponent,
    AuthComponent,
    ResetPasswordComponent,
    ResetPasswordComponents,
    SignUpComponent,
    ProjectComponentComponent,
    CartComponent,
    ProjectFileComponent,
    ProjectSubmissionComponent,
    QuizComponent,
    QuizTakeComponent,
    QuestionAnswerComponent,
    QuestionAnswerUserComponent,
    QuestionComponent,
    CartComponent,
    ProductsComponent,
    ProductbycatComponent,
    ProductCommentComponent,
    CourseComponent,
    UserListComponent,
    AuthComponent,
    ResetPasswordComponent,
    SignUpComponent,
    HeaderComponent,
    EmptyPageComponent,
    FooterComponent,
    BackOfficeComponent,
    ReviewComponent,
    RevComponent,
    JitsiComponent,
    QuitComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),
  ],
  providers: [ProductService,WishListService,ProjectService,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
