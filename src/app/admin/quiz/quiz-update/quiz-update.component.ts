import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course';
import { Question } from 'src/app/models/riadh/question.model';
import { QuizCategory } from 'src/app/models/riadh/quiz-category';
import { Quiz } from 'src/app/models/riadh/quiz.model';
import { CourseService } from 'src/app/services/course.service';
import { QuizCategoryService } from 'src/app/services/riadh/quiz-category.service';
import { QuizService } from 'src/app/services/riadh/quiz.service';
import { DialogOverviewExampleDialog, DialogQuestion } from '../quiz-add/quiz-add.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.css'],

})

export class QuizUpdateComponent implements OnInit {

  quiz : Quiz;
  id: number;
  listCourses: Course[];
  listCategories : QuizCategory[];
  quizCategory : QuizCategory;
  questions : Question[] = [new Question()];
  course: Course;
  constructor(private quizService:QuizService, private quizCategoryService:QuizCategoryService, private courseService : CourseService,
    public dialog : MatDialog , public overlay : Overlay, private router:ActivatedRoute) { }

    ngOnInit(): void {
      const id= this.router.snapshot.params['id'];
      console.log(id);
      this.quizService.getQuizById(id).subscribe(
        (quiz) => {
          this.quiz = quiz as Quiz;
          console.log(this.quiz);
        }
      );
      
      this.getCourses();
      this.getCategories();
    }
    AfterViewInit() {
      this.course = this.quiz.course;
      this.questions = this.quiz.questions;
      this.quizCategory = this.quiz.quizCategories[0];
    }
  openQuestionConfig()
  {
   const dialogRef = this.dialog.open(DialogQuestion, {
      data: {questions : this.questions},
      width: '800px',
      height: '800px',
   });
    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.adding){
      this.questions = dialogRef.componentInstance.questions;
      console.log(this.questions);
      }
      else
      console.log('The dialog was closed');
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,
      {
        data: {title: '', description: ''}
        });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.adding){
      this.quizCategory = new QuizCategory(dialogRef.componentInstance.category.title, dialogRef.componentInstance.category.description);
      console.log(this.quizCategory);
      this.quizCategoryService.addQuiz(this.quizCategory).subscribe(
        (result) => {
          console.log(result);

          console.log("categ "+this.quizCategory);
          this.getCategories();
          //this.listCategories.fill(this.quizCategory);
        }

      )
      
    }
      else
      console.log('The dialog was closed');
    });
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
        console.log(courses);
        this.listCourses = courses as  Course[];
      }
    );
  }
  onSelectCourse(event: any) {
    this.course.idCourse = event.target.value
    console.log(this.course.idCourse)
  }
  onSelectCategory(event: any) {
    this.quizCategory = event.target.value
    console.log(this.quizCategory)
  }
  addQuiz(): void {
    this.quiz.quizCategories = [this.quizCategory];
    this.quiz.questions = this.questions;
    this.quiz.course = this.course;
    //console.log(this.course.idCourse);
    console.log(this.quiz);
    this.quizService.updateQuiz(this.quiz).subscribe(
      //redirect to quiz list page
      (result) => {	
        console.log("after add quiz" + result);
        
      });
  }

}
