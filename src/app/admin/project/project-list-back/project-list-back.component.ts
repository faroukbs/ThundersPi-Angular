import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/riadh/project';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-project-list-back',
  templateUrl: './project-list-back.component.html',
  styleUrls: ['./project-list-back.component.css']
})
export class ProjectListBackComponent implements OnInit {

  projects: Project[] = [];
  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }
	ngOnInit() {
		this.getProjects();
	}
	getProjects(): void {
		this.projectService.getProjectList().subscribe(projects => this.projects = projects);
	}
	delete(project: Project): void {
		this.projectService.deleteProject(project).subscribe(success => {this.getProjects();});
	}

}
