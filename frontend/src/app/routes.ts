import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EnrollmentComponent } from './components/enrollment.component';
import { DepartmentsComponent } from './components/departments.component';
import { SecretariatComponent } from './components/secretariat.component';
import { DisciplineComponent } from './components/discipline.component';
import { EnrollStudentComponent } from './components/enrollstudent.component';
import { StudentComponent } from './components/student.component';

const routes: Routes = [
  { path: '', redirectTo: '/enrollment', pathMatch: 'full' },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'departments/:id1/:id2', component: SecretariatComponent},
  { path: 'enroll-student/:id', component: EnrollStudentComponent},
  { path: 'discipline/:id', component: DisciplineComponent},
  { path: 'student/:id', component: StudentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
