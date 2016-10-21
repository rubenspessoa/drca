import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './routes';

import { DrcaComponent } from './components/drca.component';
import { EnrollmentComponent } from './components/enrollment.component';
import { DepartmentsComponent } from './components/departments.component';
import { SecretariatComponent } from './components/secretariat.component';
import { DisciplineComponent } from './components/discipline.component';
import { EnrollStudentComponent } from './components/enrollstudent.component';
import { StudentComponent } from './components/student.component';

import { SecretariatService } from './services/secretariat.service';
import { DepartmentService } from './services/department.service';
import { StudentService} from './services/student.service';
import { DisciplineService } from './services/discipline.service';
import { ProfessorService } from './services/professor.service';


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
    DepartmentService,
    StudentService,
    DisciplineService,
    ProfessorService
  ],
  bootstrap: [
    DrcaComponent
  ]
})

export class AppModule {}
