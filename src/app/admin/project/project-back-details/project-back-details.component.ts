import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/riadh/project';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-project-back',
  templateUrl: './project-back-details.component.html',
  styleUrls: ['./project-back-details.component.css']
})
export class ProjectBackDetailsComponent implements OnInit {

  project: Project = new Project() ;
	constructor(private route: ActivatedRoute, private projectService: ProjectService, private location: Location) { }
	ngOnInit() {
		this.getProject();
    
	}
	getProject(): void {
		const id = + Number(this.route.snapshot.paramMap.get('id'));
		this.projectService.getProjectById(id).subscribe(project => this.project = project);
	}
	goBack(): void {
		this.location.back();
	}

}
