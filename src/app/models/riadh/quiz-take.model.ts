import { User } from "../user";
import { Quiz } from "./quiz.model";

export class QuizTake {
    id: number;
    mark : number;
    user : User;
    quiz : Quiz;
    dateTaken : Date;
}
