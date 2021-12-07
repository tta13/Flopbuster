import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlopVotesComponent } from './flop-votes/flop-votes.component';
import { FlopVoteTileComponent } from './flop-vote-tile/flop-vote-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    FlopVotesComponent,
    FlopVoteTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
