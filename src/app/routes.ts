import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DrcaComponent } from './drca.component';
import { EnrollmentComponent } from './enrollment.component';
import { DepartmentsComponent } from './departments.component';
import { SecretariatComponent } from './secretariat.component';

const routes: Routes = [
  { path: '', redirectTo: '/enrollment', pathMatch: 'full' },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: ':departmentId/:secretariatId', component: SecretariatComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
