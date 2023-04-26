import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/riadh/project';
//import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/riadh/project.service';
import { ProjectFileService } from 'src/app/services/riadh/project-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
	//progress: { percentage: number } = { percentage: 0 };
	//formData!: FormGroup; 

	// get status() {
		//return this.progress.percentage <= 25 ? 'is-danger' : this.progress.percentage <= 50 ? 'is-warning' : this.progress.percentage <= 75 ? 'is-info' : 'is-success';
	//}
	//selectFile(event: any) {
//		this.selected = event.target.files;
//		this.label = this.selected.length > 1 ? this.selected.length + ' files selected' : '1 file selected';
//	  }
	 uploadFiles(): void
	 {
		this.message = [];

		if (this.selectedFiles) {
		  for (let i = 0; i < this.selectedFiles.length; i++) {
			this.upload(i, this.selectedFiles[i]);
		  }
		}
	 }
	  upload(idx : number , file:File): void {
		this.progress[idx] = { value: 0, fileName: file.name };

		if (file) {
		  this.projectFileService.uploadProjectFile(file).subscribe({
			next: (event: any) => {
			  if (event.type === HttpEventType.UploadProgress) {
				this.progress[idx].value = Math.round(100 * event.loaded / event.total);
			  } else if (event instanceof HttpResponse) {
				const msg = 'Uploaded the file successfully: ' + file.name;
				this.message.push(msg);
				this.fileInfos = this.projectFileService.getProjectFiles();
			  }
			},
			error: (err: any) => {
			  this.progress[idx].value = 0;
			  const msg = 'Could not upload the file: ' + file.name;
			  this.message.push(msg);
			  this.fileInfos = this.projectFileService.getProjectFiles();
			}
		  });
		}
	  }
	
  @Input() project: Project = {id: undefined, name: '', maxMarks: 0 , course: null  ,user: this.projectService.storageUserAsStr };
	constructor(private formBuilder:FormBuilder ,
		public projectService: ProjectService,public projectFileService:ProjectFileService, private location: Location) { }
	ngOnInit() {
		this.fileInfos = this.projectFileService.getProjectFiles();
	}
	addProject(): void {
		this.projectService.addProject(this.project).subscribe(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}

	
}