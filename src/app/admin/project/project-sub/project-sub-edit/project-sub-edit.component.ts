import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectSubmission } from 'src/app/models/riadh/project-submission.model';
import { ProjectSubmissionService } from 'src/app/services/riadh/project-submission.service';

@Component({
  selector: 'app-project-sub-edit',
  templateUrl: './project-sub-edit.component.html',
  styleUrls: ['./project-sub-edit.component.css']
})
export class ProjectSubEditComponent implements OnInit {

  constructor(private projectSubService: ProjectSubmissionService , private route: ActivatedRoute , private location : Location) { }
  projectSubmission : ProjectSubmission= new ProjectSubmission();
  projectSubId: number = 0;
  ngOnInit(): void {
      this.get(this.projectSubId);
  }
  editProjectSub()
  {
    this.projectSubId = + Number(this.route.snapshot.paramMap.get('id'));
    this.projectSubService.updateProject(this.projectSubmission).subscribe(
      success => {this.get(this.projectSubId);}
    );
  }

  get(id: number): void {
    this.projectSubService.getProjectById(id).subscribe(projectSub => this.projectSubmission = projectSub);
  }

  goBack(): void
  {
    window.history.back();
  }

}
