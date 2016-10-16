import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {DrcaComponent} from './drca';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    DrcaComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
