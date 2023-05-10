import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/riadh/project';
//import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/riadh/project.service';
import { ProjectFileService } from 'src/app/services/riadh/project-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectFile } from 'src/app/models/riadh/project-file.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

	selectedFiles?: FileList;
	currentFile?: File;
	progress : any[] = [];
	message:string[] = [];

	previews: string[] = [];
	fileInfos?: Observable<any>;

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
  
	fileUrl : any; //File url to upload
	selected! : FileList;
	// uploadFiles(): void
	 //{
	//	this.message = [];

	//	if (this.selectedFiles) {
	//	  for (let i = 0; i < this.selectedFiles.length; i++) {
	//		this.upload(i, this.selectedFiles[i]);
	//	  }
	//	}
	 //}
	 

	 //Use this after we have added the project to the database with a HTTP response of 200
	// uploadFilesToProject(projectId: number): void
	 //{
	//	this.message = [];

//		if (this.selectedFiles) {
//		  for (let i = 0; i < this.selectedFiles.length; i++) {
//			this.uploadFileToProject(i, this.selectedFiles[i],projectId);
//		  }
//		}
//	 }
	 addProjectWithFiles(): void
	 {
		this.addProject();
		console.log(this.project.id);
		this.goBack();
	}
		  
		 
		
	 

	project: Project= new Project();
 // @Input() project: Project = {id: undefined, name: '', description : '', maxMarks: 0 , course: null  ,user: this.projectService.storageUserAsStr , projectFiles: []};
	constructor(private formBuilder:FormBuilder ,
		public projectService: ProjectService,public projectFileService:ProjectFileService, private location: Location) { }
	ngOnInit() {
		this.fileInfos = this.projectFileService.getProjectFiles();
	}
	addProject(): void {
		
		 this.projectService.addProject(this.project).subscribe(project => {
			console.log(project);
			this.project = project;
			console.log(this.project);
			console.log(this.project.id);
		if (this.selectedFiles) {
			for (let i = 0; i < this.selectedFiles.length; i++) {
				if(this.selectedFiles[i])
				{
					//upload project with files
					//this.project.projectFiles.push(new ProjectFile(	this.selectedFiles[i],this.selectedFiles[i].name,this.selectedFiles[i].type));
					//this.project.user = this.projectService.storageUserAsStr.user;
					//we need to be able to handle to upload of both project files and project itself
					this.projectFileService.uploadProjectFileByProjectId(this.selectedFiles[i],this.project.id).subscribe((res)=>{
						console.log(res);
					});
				}
			}
		  }
		});
	}
	goBack(): void {
		this.location.back();
	}

	
}