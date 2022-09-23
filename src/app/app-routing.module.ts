import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './headline/headline.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path:'',component:HeadlineComponent},
  {path:'tech-heading',component:TechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
