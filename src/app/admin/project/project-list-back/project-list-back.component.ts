import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/riadh/project';
import { ProjectSubmission } from 'src/app/models/riadh/project-submission.model';
import { ProjectSubmissionService } from 'src/app/services/riadh/project-submission.service';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-project-list-back',
  templateUrl: './project-list-back.component.html',
  styleUrls: ['./project-list-back.component.css']
})
export class ProjectListBackComponent implements OnInit {

  projects: Project[] = [];
  projectSubs: ProjectSubmission[] = [];
  constructor(private route: ActivatedRoute, private projectService: ProjectService,private projectSubService: ProjectSubmissionService) { }
	ngOnInit() {
		this.getProjects();
		this.getProjectSubs();
	}
	getProjectSubs(): void {
		this.projectSubService.getProjectList().subscribe(projectSubs => this.projectSubs = projectSubs);
	}
	getProjects(): void {
		this.projectService.getProjectList().subscribe(projects => this.projects = projects);
	}
	delete(project: Project): void {
		this.projectService.deleteProject(project).subscribe(success => {this.getProjects();});
	}

	deleteSub(projectSub: ProjectSubmission): void
	{
		this.projectSubService.deleteProject(projectSub).subscribe(success => {this.getProjectSubs();});
	}

}
