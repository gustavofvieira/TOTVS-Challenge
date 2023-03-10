import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { JobVacancyComponent } from './components/job-vacancy/job-vacancy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'candidate', component: CandidateComponent },
  { path: 'jobVacancy', component: JobVacancyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
