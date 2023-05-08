import { QuestionAnswer } from "./question-answer.model";
import { Question } from "./question.model";

export class QuestionAnswerUser {
    id : number;
    question : Question;
    questionAnswer : QuestionAnswer;
}
