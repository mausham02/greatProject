import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service'
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

import { FooterComponent } from './footer/footer.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamRivalComponent } from './team-rival/team-rival.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeamDetailsComponent,
    FooterComponent,
    PredictionComponent,
    MatchesComponent,
    TeamRivalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
