import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/riadh/project';
import { ProjectSubmission } from 'src/app/models/riadh/project-submission.model';
import { ProjectSubmissionService } from 'src/app/services/riadh/project-submission.service';
import { ProjectService } from 'src/app/services/riadh/project.service';
import { Observable } from 'rxjs';
import { ProjectFileService } from 'src/app/services/riadh/project-file.service';

@Component({
  selector: 'app-project-sub-add',
  templateUrl: './project-sub-add.component.html',
  styleUrls: ['./project-sub-add.component.css']
})
export class ProjectSubAddComponent implements OnInit {
  
  constructor(private projectSubService: ProjectSubmissionService, private projectService: ProjectService
    ,private projectFileService:  ProjectFileService) { }
  projectSubmission : ProjectSubmission= new ProjectSubmission();
  projects : Project[]= [];
  selectedFiles?: FileList;
	currentFile?: File;
	progress : any[] = [];
	message:string[] = [];

	previews: string[] = [];
	fileInfos?: Observable<any>;

  ngOnInit(): void {
    this.getProjects();
  }
  addProjectSub()
  {
    this.projectSubmission.user = this.projectSubService.storageUserAsStr();
    this.projectSubService.addProject(this.projectSubmission).subscribe();
  }

  getProjects()
  {
    this.projectService.getProjectList().subscribe(projects => this.projects = projects);
  }
  addProjectSubWithFiles()
  {
    this.projectSubService.addProject(this.projectSubmission).subscribe(projectSub => {
			console.log(projectSub);
			this.projectSubmission = projectSub;
			console.log(this.projectSubmission);
			console.log(this.projectSubmission.id);
		if (this.selectedFiles) {
			for (let i = 0; i < this.selectedFiles.length; i++) {
				if(this.selectedFiles[i])
				{
					//upload project with files
					//this.project.projectFiles.push(new ProjectFile(	this.selectedFiles[i],this.selectedFiles[i].name,this.selectedFiles[i].type));
					//this.project.user = this.projectService.storageUserAsStr.user;
					//we need to be able to handle to upload of both project files and project itself
					this.projectFileService.uploadProjectFileByProjectSubId(this.selectedFiles[i],this.projectSubmission.id).subscribe((res)=>{
						console.log(res);
					});
				}
			}
		  }
		});
  }
  selectFiles(event: any): void {
		this.message = [];
		this.progress = [];
		this.selectedFiles = event.target.files;
		
		this.previews = [];
		if (this.selectedFiles && this.selectedFiles[0]) {
		  const numberOfFiles = this.selectedFiles.length;
		  for (let i = 0; i < numberOfFiles; i++) {
			const reader = new FileReader();
	  
			reader.onload = (e: any) => {
			  console.log(e.target.result);
			  this.previews.push(e.target.result);
			};
	  
			reader.readAsDataURL(this.selectedFiles[i]);
		  }
		}
	  }
}
