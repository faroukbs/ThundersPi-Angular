import { User } from "../user";

export class Project  {
    id!: number;
    name! : string;
    maxMarks!: number;
    idCours! :number;
    idTeacher!: User;
    
}