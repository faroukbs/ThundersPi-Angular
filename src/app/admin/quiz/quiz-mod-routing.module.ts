import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz.component';
import { QuizCategoryListComponent } from './quiz-category/quiz-category-list/quiz-category-list.component';
import { QuizCategoryUpdateComponent } from './quiz-category/quiz-category-update/quiz-category-update.component';
import { QuizCategoryAddComponent } from './quiz-category/quiz-category-add/quiz-category-add.component';
import { QuizUpdateComponent } from './quiz-update/quiz-update.component';

const routes: Routes = [
  { path: 'quizAdd', component: QuizAddComponent  },
  { path: 'quizList' , component: QuizListComponent},
  { path : 'quizUpdate/:id' , component: QuizUpdateComponent},
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'quizCategAdd', component: QuizCategoryAddComponent},
  { path: 'quizCategList' , component: QuizCategoryListComponent},
  { path: 'quizCategUpdate/:id' , component: QuizCategoryUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModRoutingModule { }
