import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectFileComponent } from './project-file/project-file.component';
import { ProjectBackDetailsComponent } from './project-back-details/project-back-details.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectListBackComponent } from './project-list-back/project-list-back.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectSubmissionComponent } from 'src/app/front/project/add-project-submission/add-project-submission.component';
import { ProjectSubAddComponent } from './project-sub/project-sub-add/project-sub-add.component';

const routes: Routes = [
  
    
    {path: 'add', component: AddProjectComponent},
    {path: 'update/:id', component: UpdateProjectComponent},
    {path: 'list', component: ProjectListBackComponent},
    {path: 'details/:id', component: ProjectBackDetailsComponent},
    {path:'addSub',component:ProjectSubAddComponent},
    {path: 'file', loadChildren: () => import('./project-file/project-file.module').then(m => m.ProjectFileModule)}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModRoutingModule { }
