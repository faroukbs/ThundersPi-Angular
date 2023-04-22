import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/riadh/project.service';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  add(): void 
  {
    
  }

  ngOnInit(): void {
  }

}
