import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectSubmission } from 'src/app/models/riadh/project-submission.model';
import { ProjectSubmissionService } from 'src/app/services/riadh/project-submission.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-sub',
  templateUrl: './project-sub.component.html',
  styleUrls: ['./project-sub.component.css']
})
export class ProjectSubComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projectSubService: ProjectSubmissionService,private location: Location) { }
  projectSubId: number = 0;
  projectSub:ProjectSubmission;
  ngOnInit(): void {
    this.getProjectSub();
  }
  getProjectSub()
  {
    this.projectSubId = + Number(this.route.snapshot.paramMap.get('id'));
    this.projectSubService.getProjectById(this.projectSubId).subscribe(projectSub => this.projectSub = projectSub);
  }
  goBack(): void {
    this.location.back();
  }

}
