import { QuestionAnswer } from "./question-answer.model";
import { Quiz } from "./quiz.model";

export class Question {
    id: number;
    title : string;
    mark :  number;
    questionAnswers : QuestionAnswer[];
    quiz : Quiz;

    constructor ()  
    {
    this.questionAnswers = [new QuestionAnswer(), new QuestionAnswer(), new QuestionAnswer()];
    }
    
    
}
