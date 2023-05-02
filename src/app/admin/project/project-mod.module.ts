import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectModRoutingModule } from './project-mod-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { ProjectBackDetailsComponent } from './project-back-details/project-back-details.component';
import { ProjectFileComponent } from './project-file/project-file.component';
import { ProjectListBackComponent } from './project-list-back/project-list-back.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectComponent } from './project.component';


@NgModule({
  declarations: [
    //All Comp purely related to project
    AddProjectComponent,
    DeleteProjectComponent,
    ProjectBackDetailsComponent,
    ProjectListBackComponent,
    UpdateProjectComponent,
    ProjectComponent,

    //Leads to project file sub Comp
    ProjectFileComponent,
  ],
  imports: [
    CommonModule,
    ProjectModRoutingModule,
    FormsModule
  ]
})
export class ProjectModModule { }
