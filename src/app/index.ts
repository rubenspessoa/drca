import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './routes';

import { DrcaComponent } from './drca.component';
import { EnrollmentComponent } from './enrollment.component';
import { DepartmentsComponent } from './departments.component';
import { SecretariatComponent } from './secretariat.component';

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
    SecretariatComponent
  ],
  providers: [],
  bootstrap: [
    DrcaComponent
  ]
})

export class AppModule {}
