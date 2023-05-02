import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizModRoutingModule } from './quiz-mod-routing.module';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizUpdateComponent } from './quiz-update/quiz-update.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

@NgModule({
  declarations: [
    QuizAddComponent,
    QuizListComponent,
    QuizUpdateComponent
  ],
  imports: [
    CommonModule,
    QuizModRoutingModule
  ]
})
export class QuizModModule { }
