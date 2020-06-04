import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamRivalComponent } from './team-rival/team-rival.component';

const routes: Routes = [


  { path: '', component: HomePageComponent },

  { path: 'prediction', component: PredictionComponent },

  { path: 'matches', component: MatchesComponent },

  { path: 'rival', component: TeamRivalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
