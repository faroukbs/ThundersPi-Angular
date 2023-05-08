import { User } from "../user";
import { Project } from "./project";
import { ProjectFile } from "./project-file.model";

export class ProjectSubmission {
    id : number;
    title : string;
    description : string;
    marks : number;
    projectFiles : ProjectFile[];
    project : Project;
    user : User;

}
