import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DataService} from './data.service'
import { HttpClientModule } from '@angular/common/http';
import { MyTeamComponent } from './my-team/my-team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

import {FooterComponent} from './footer/footer.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MatchesComponent } from './matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTeamComponent,
    TeamDetailsComponent,
    FooterComponent,
    PredictionComponent,
    MatchesComponent
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
