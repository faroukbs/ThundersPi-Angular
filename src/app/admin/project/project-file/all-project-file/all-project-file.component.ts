import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';

import { ProjectFileService } from 'src/app/services/riadh/project-file.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'app-all-project-file',
  templateUrl: './all-project-file.component.html',
  styleUrls: ['./all-project-file.component.css']
})
export class AllProjectFileComponent implements OnInit {

  constructor(private projectFileService:ProjectFileService) { }  
 
  ngOnInit(): void {
    this.getProjects();  
  }
  projectFilelist:any=[];
  getProjects(){
    this.projectFileService.getProjectFiles().subscribe(data =>{
      this.projectFilelist =data;
      console.log(data);
    })
  }
  deleteProjectFile(projectFile:any){
    this.projectFileService.deleteProjectFile(projectFile.id).subscribe(()=>{
      this.getProjects();
    })
  }
}
