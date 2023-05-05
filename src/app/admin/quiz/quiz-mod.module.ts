import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog'

import { QuizModRoutingModule } from './quiz-mod-routing.module';
import { QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizUpdateComponent } from './quiz-update/quiz-update.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz.component';
import { QuizCategoryAddComponent } from './quiz-category/quiz-category-add/quiz-category-add.component';
import { QuizCategoryListComponent } from './quiz-category/quiz-category-list/quiz-category-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import  {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MaterialExampleModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    QuizAddComponent,
    QuizListComponent,
    QuizUpdateComponent,
    QuizComponent,
    QuizCategoryAddComponent,
    QuizCategoryListComponent
  ],
  imports: [
    CommonModule,
    QuizModRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MaterialExampleModule,

    ],
    providers : [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    entryComponents: [
      QuizCategoryAddComponent
    ],
})
export class QuizModModule { }
