import { User } from "../user";

export class Project  {
    id!: number;
    name! : string;
    maxMarks!: number;
    course! :number | null;
    user!: User;
    
}