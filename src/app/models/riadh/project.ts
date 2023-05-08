import { Course } from "../course";
import { User } from "../user";
import { ProjectFile } from "./project-file.model";

export class Project  {
    id!: number | undefined;
    name! : string;
    description! : string;
    maxMarks!: number;
    course! :Course | null;
    user!: User;
    projectFiles! : ProjectFile[];
    
}