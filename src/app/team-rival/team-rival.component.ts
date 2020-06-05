import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
import { Game } from '../Games';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-team-rival',
  templateUrl: './team-rival.component.html',
  styleUrls: ['./team-rival.component.css']
})
export class TeamRivalComponent implements OnInit {


  myTeam: Team;
  rivalTeam: Team;
  teams: Team[];

  games: Game[];

  home:Game[];



  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAFLTeams();
  }

  selectMyTeam(team: Team): void {

    this.myTeam = team;

  }

  

  selectRivalTeam(team: Team): void {

    this.rivalTeam = team;
    this.getMyTeamRival();

  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp })
  }




  getMyTeamRival(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateam == this.myTeam.name || element.ateam == this.rivalTeam.name)
          && (element.hteam == this.myTeam.name || element.hteam == this.rivalTeam.name) && element.year == 2019) tempArr.push(element)

      })

      this.games = tempArr;
    })
  }


  

}


