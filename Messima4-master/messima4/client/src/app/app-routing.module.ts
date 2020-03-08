import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFamilyComponent } from './all-family/all-family.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'allFamily', component:AllFamilyComponent},
  {path:'allTasks', component: AllTasksComponent},
  {path:'addTask', component: AddTaskComponent},
  {path: '', redirectTo:'add', pathMatch:'full' },
  {path:'**' , component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
