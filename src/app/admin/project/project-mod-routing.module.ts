import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectFileComponent } from './project-file/project-file.component';
import { ProjectBackDetailsComponent } from './project-back-details/project-back-details.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectListBackComponent } from './project-list-back/project-list-back.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {path: 'pr' , component: ProjectComponent, children: [
    {path: 'add', component: AddProjectComponent},
    {path: 'delete', component: DeleteProjectComponent},
    {path: 'update', component: UpdateProjectComponent},
    {path: 'list', component: ProjectListBackComponent},
    {path: 'details', component: ProjectBackDetailsComponent},
    {path: 'file', component: ProjectFileComponent}, ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModRoutingModule { }
