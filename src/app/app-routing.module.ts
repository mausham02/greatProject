import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTeamComponent } from './my-team/my-team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PredictionComponent } from './prediction/prediction.component';
import { MatchesComponent } from './matches/matches.component';


const routes: Routes = [

  
  {path:'',component:MyTeamComponent},

  {path:'prediction',component:PredictionComponent},

  {path:'matches',component:MatchesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
