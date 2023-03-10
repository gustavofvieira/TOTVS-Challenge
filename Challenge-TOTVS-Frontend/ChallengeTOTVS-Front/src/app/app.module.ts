import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { HomeComponent } from './components/home/home.component';
import { JobVacancyComponent } from './components/job-vacancy/job-vacancy.component';

import { CandidateService } from './services/candidate/candidate.service';
import { JobApplicationService } from './services/job-application/job-application.service';
import { JobVacancyService } from './services/job-vacancy/job-vacancy.service';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { ModalModule } from "ngx-bootstrap/modal";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    JobVacancyComponent,
    CandidateComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule,CandidateService, JobVacancyService, JobApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
