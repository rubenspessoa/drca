import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EnrollmentComponent } from './enrollment.component';
import { DepartmentsComponent } from './departments.component';
import { SecretariatComponent } from './secretariat.component';
import { DisciplineComponent } from './discipline.component';
import { EnrollStudentComponent } from './enrollstudent.component';
import { StudentComponent } from './student.component';

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
