import { Course } from "../course";
import { User } from "../user";
import { Question } from "./question.model";
import { QuizCategory } from "./quiz-category";

export class Quiz {
    id: number;
    name: string;
    maxMarks: number;
    course : Course;
    dateCreated : Date;
    teacher : User;
    quizCategories : QuizCategory[];
    questions : Question[];

}
