import { Component, OnInit } from '@angular/core';
import { Team } from '../Team';
import { Tip } from '../Tip';
import { Game } from '../Games';
import { DataService } from '../data.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  selectedTeam: Team;
  teams: Team[];
  tips: Tip[];
  games: Game[];
  nextFive: Game[];
  wins: Game[];
  myTeamFinal: Game[];





  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.getAFLTeams();

  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
    this.getMyTeamsPrediction();
    this.getGameResults();
    this.getNextFiveMatches();
    this.getTeamWin();
    this.getTeamFinal();

  }


  //Get all the AFL Teams

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  //As a fan i want to see the prediction that my team will win their next game

  getMyTeamsPrediction(): void {

    this.dataService.getTips().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {

        if (element.tipteamid == this.selectedTeam.id && element.round == 20) tempArr.push(element)
      })

      this.tips = tempArr;

    })
  }

  //As a fan, I want to see the results of all the games my team has played this season

  getGameResults(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.round < 20 && element.year == 2019) tempArr.push(element)
      })

      this.games = tempArr;


    })
  }




  //As a fan, I want to see the opponent and games details for the next 5 matched my team will play.

  getNextFiveMatches(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.round >= 20 && element.round <= 25 && element.year == 2019) {
          tempArr.push(element)
        }
      })


      this.nextFive = tempArr;
    })
  }


  //As a fan, I want to see all the venues where my team has won so far this season.

  getTeamWin(): void {
    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.winnerteamid !=
          this.selectedTeam.id && element.round < 20 && element.year == 2019) tempArr.push(element)
      })

      this.wins = tempArr;

    })
  }


  // As a user i want to see all the matches of my team which is final in last 10 years

  getTeamFinal(): void {

    this.dataService.getGames().subscribe(temp => {
      var tempArr = [];

      temp.forEach(element => {
        if ((element.ateamid == this.selectedTeam.id || element.hteamid == this.selectedTeam.id) && element.is_grand_final == 1 && element.year > 2008 && element.year <= 2018) tempArr.push(element)
      })


      this.myTeamFinal = tempArr;

      console.log(tempArr)
    })
  }




}





