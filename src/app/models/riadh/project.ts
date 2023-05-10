import { Course } from "../course";
import { User } from "../user";
import { ProjectFile } from "./project-file.model";

export class Project  {
    id!: number | undefined;
    description! : string;
    maxMarks!: number;
    name! : string;
    course! :Course | null;
    user!: User;
    projectFiles! : ProjectFile[];
    
}