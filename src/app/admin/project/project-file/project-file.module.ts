import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFileRoutingModule } from './project-file-routing.module';
import { AddProjectFileComponent } from './add-project-file/add-project-file.component';
import { AllProjectFileComponent } from './all-project-file/all-project-file.component';


@NgModule({
  declarations: [
    AddProjectFileComponent,
    AllProjectFileComponent,
  ],
  imports: [
    CommonModule,
    ProjectFileRoutingModule,
  ]
})
export class ProjectFileModule { }
