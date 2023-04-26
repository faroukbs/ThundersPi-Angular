import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/riadh/project';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() project: Project = {id: undefined, name: '', maxMarks: 0 , course: null  ,user: this.projectService.storageUserAsStr };
	constructor(private projectService: ProjectService, private location: Location) { }
	ngOnInit() {
	}
	save(): void {
		this.projectService.addProject(this.project).subscribe(() => this.goBack());
	}
	goBack(): void {
		this.location.back();
	}
}