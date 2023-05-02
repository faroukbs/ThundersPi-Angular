import { User } from "../user";
import { ProjectFile } from "./project-file.model";

export class Project  {
    id!: number | undefined;
    name! : string;
    maxMarks!: number;
    course! :number | null;
    user!: User;
    projectFiles! : ProjectFile[];
    
}