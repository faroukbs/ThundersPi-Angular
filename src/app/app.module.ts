import { ListProductComponent } from './admin/list-product/list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCourseComponent } from './admin/list-course/list-course.component';
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
import { AddCourseComponent } from "./admin/add-course/add-course.component";
import { AddLibElementComponent } from './admin/add-lib-element/add-lib-element.component';
import { LibElmListComponent } from './admin/lib-elm-list/lib-elm-list.component';
import { AddLibcatComponent } from './admin/add-libcat/add-libcat.component';
import { ListLibcatComponent } from './admin/list-libcat/list-libcat.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseClientComponent } from './front/course-client/course-client.component';
import { CourseListClientComponent } from './front/course-list-client/course-list-client.component';
import { CoursePipe } from './course.pipe';


// @ts-ignore
// @ts-ignore
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
import { WishlistComponent } from './front/shop/wishlist/wishlist.component';
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
    ListCourseComponent,
    ListCategoryComponent,
    NavbarComponent,
    SidebarComponent,
    UpdateProductComponent,
    FooterComponent,
    NavComponent,
    AddCourseComponent,
    ProductsComponent,
    AddLibElementComponent,
    LibElmListComponent,
    AddLibcatComponent,
    ListLibcatComponent,
    UpdateCourseComponent,
    CourseClientComponent,
    CourseListClientComponent,
    CoursePipe,
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
    WishlistComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
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
