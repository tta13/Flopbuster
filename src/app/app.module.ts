import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlopVotesComponent } from './flop-votes/flop-votes.component';

@NgModule({
  declarations: [
    AppComponent,
    FlopVotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
