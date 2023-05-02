import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectFileComponent } from './all-project-file/all-project-file.component';
import { ProjectFileComponent } from './project-file.component';

const routes: Routes = [
  {path:'list', component: AllProjectFileComponent},
  {path:'list/:id', component: AllProjectFileComponent},
  {path : ':id',component:ProjectFileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFileRoutingModule { }
