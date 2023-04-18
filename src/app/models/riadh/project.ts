import { User } from "../user";

export class Project  {
    id!: number | undefined;
    name! : string;
    maxMarks!: number;
    course! :number | null;
    user!: User;
    
}