import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjectFileService } from 'src/app/services/riadh/project-file.service';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-add-project-file',
  templateUrl: './add-project-file.component.html',
  styleUrls: ['./add-project-file.component.css']
})
export class AddProjectFileComponent implements OnInit {

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

  uploadFiles(): void
	 {
		this.message = [];

		if (this.selectedFiles) {
		  for (let i = 0; i < this.selectedFiles.length; i++) {
			this.upload(i, this.selectedFiles[i]);
		  }
		}
	 }
	 	 //Use this after we have added the project to the database with a HTTP response of 200
	 uploadFilesToProject(projectId: number): void
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
  constructor(private formBuilder:FormBuilder ,
		public ProjectService: ProjectService,public projectFileService:ProjectFileService, private location: Location) { }

  ngOnInit(): void {
  }

}
