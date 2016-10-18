import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './routes';

import { DrcaComponent } from './drca.component';
import { EnrollmentComponent } from './enrollment.component';
import { DepartmentsComponent } from './departments.component';
import { SecretariatComponent } from './secretariat.component';
import { DisciplineComponent } from './discipline.component';
import { EnrollStudentComponent } from './enrollstudent.component';
import { StudentComponent } from './student.component';

import { SecretariatService } from './services/secretariat.service';
import { DepartmentService } from './services/department.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    DrcaComponent,
    EnrollmentComponent,
    DepartmentsComponent,
    SecretariatComponent,
    DisciplineComponent,
    EnrollStudentComponent,
    StudentComponent
  ],
  providers: [
    SecretariatService,
    DepartmentService
  ],
  bootstrap: [
    DrcaComponent
  ]
})

export class AppModule {}
