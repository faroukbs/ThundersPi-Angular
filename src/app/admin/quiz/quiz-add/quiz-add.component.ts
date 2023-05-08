import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { CourseService } from 'src/app/services/course.service';
import { QuizService } from 'src/app/services/riadh/quiz.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import {Overlay} from '@angular/cdk/overlay';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';
import { Question } from 'src/app/models/riadh/question.model';


@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css'],
})
export class QuizAddComponent implements OnInit {

  // @ViewChild('quizCategory',{read:QuizCategoryAddComponent})
  // quizCategoryComponent!: QuizCategoryAddComponent;
  
  quiz : Quiz;
  listCourses: Course[];
  listCategories : QuizCategory[];
  quizCategory : QuizCategory;
  questions : Question[] = [new Question()];
  constructor(private quizService:QuizService, private quizCategoryService:QuizCategoryService, private courseService : CourseService,
    public dialog : MatDialog , public overlay : Overlay) { }

  addQuestion()
  {
    this.questions.push(new Question());
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,
      {
        data: {title: '', description: ''}
        });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.adding){
      this.quizCategory.title = result.data.title;
      this.quizCategory.description = result.data.description;
      this.quizCategoryService.addQuiz(this.quizCategory).subscribe(
        (result) => {
          this.quizCategory = result as QuizCategory;
          this.quiz.quizCategories.push(this.quizCategory);
        }
      )}else
      console.log('The dialog was closed');
    });
  }

//     openDialog(event: any) {
//       const dialogConfig = new MatDialogConfig();
// dialogConfig.width = '400px';
// dialogConfig.height = '300px';
// dialogConfig.data =  {title: event.data, description: ''}
// dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
//       const dialogRef = this.dialog.open(QuizCategoryAddComponent, 
//        dialogConfig
        
//       );
//       dialogRef.afterClosed().subscribe(result => {
//         this.quizCategoryComponent.data = result;
//         this.quizCategoryComponent.setQuizCategory();
//         this.quiz.quizCategories.push(this.quizCategoryComponent.quizCateg);
//     }
//     );}

  //  setNewCategory(event : any)
  //  {
  //    this.quizCategory = event.item;
  //  }
   // search = (text$: Observable<string>) =>
	//	text$.pipe(
	//		debounceTime(200),
	//		distinctUntilChanged(),
	//		switchMap((searchText) =>
	//			searchText.length < 2 ? [] : this.loadCategoriesWithSearch(searchText)
	//		),
	//	);

    // loadCategoriesWithSearch(searchText: string) : QuizCategory[]
    // {
    //   return this.listCategories.filter(v => new RegExp(searchText, 'gi').test(v.title)).slice(0, 10);

    // }

  ngOnInit(): void {
    this.quiz = new Quiz();
    this.getCourses();
    this.getCategories();
  }
  getCategories()
  {
    this.quizCategoryService.getAllQuiz().subscribe(
      (categories : QuizCategory[]) => {
        this.listCategories = categories as QuizCategory[];
      }
    );
  }

  getCourses(): void {
    this.courseService.getCourseList().subscribe(
      (courses) => {
        this.listCourses = courses as  Course[];
      }
    );
  }

  addQuiz(): void {
    this.quizService.addQuiz(this.quiz).subscribe(
      //redirect to quiz list page
      (result) => {	
        console.log(result);
      });
  }

}

export interface DialogData
{
  title : string;
  description : string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
    public adding: boolean = false;
    category : QuizCategory;
  onNoClick(): void {
    this.dialogRef.close();
  }
  add(): void { 
    this.adding =true;
    this.dialogRef.close({data : this.category});
  }
}