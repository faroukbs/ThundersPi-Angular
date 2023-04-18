import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/riadh/project';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-project-component',
  templateUrl:  './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  @Input() projects : Project[] = [];

  constructor(private projectService : ProjectService) { }


  listProjects()
  {
    this.projectService.getProjectList().subscribe((data) => this.projects=data);
  }
  add(): void 
  {
    
  }

  ngOnInit(): void {
    this.listProjects();
  }

}
