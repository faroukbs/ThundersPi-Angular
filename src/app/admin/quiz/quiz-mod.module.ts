import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog'

import { QuizModRoutingModule } from './quiz-mod-routing.module';
import { DialogOverviewExampleDialog, QuizAddComponent } from './quiz-add/quiz-add.component';
import { QuizUpdateComponent } from './quiz-update/quiz-update.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz.component';
import { QuizCategoryListComponent } from './quiz-category/quiz-category-list/quiz-category-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import  {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MaterialExampleModule } from 'src/app/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    QuizAddComponent,
    QuizListComponent,
    QuizUpdateComponent,
    QuizComponent,
    QuizCategoryListComponent,
    DialogOverviewExampleDialog,
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
    MatFormFieldModule,
    MatToolbarModule, 
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    MatStepperModule,

    ],
    exports : [
      MaterialExampleModule,
      MatFormFieldModule
    ],
    providers : [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    entryComponents: [
      DialogOverviewExampleDialog
    ],
})
export class QuizModModule { }
