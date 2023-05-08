import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  { path: 'quizAdd', component: QuizAddComponent  },
  { path: 'quizList' , component: QuizListComponent},
  { path : 'quizUpdate/:id' , component: QuizAddComponent},
  { path: 'quiz/:id', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizModRoutingModule { }
