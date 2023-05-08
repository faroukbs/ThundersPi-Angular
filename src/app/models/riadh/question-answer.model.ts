import { Question } from "./question.model";

export class QuestionAnswer {
    id : number;
    content : string;
    correct : boolean;
    question : Question;
}
