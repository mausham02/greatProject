import { Component, OnInit } from '@angular/core';

import { Ladder } from '../Ladder';
import { DataService } from '../data.service';
import { Team } from '../Team';
import {Game} from '../Games'




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ladder: Ladder[];
  teams: Team[];
  upcoming:Game[];







  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
    // this.getLadderBoard();
    this.getUpcomingMatches();



  }

  // Getting all the teams
  getTeams(): void {

    this.dataService.getTeams().subscribe(temp => this.teams = temp
    )
  }

  

  // getLadderBoard(): void {

  //   this.dataService.getLadder().subscribe(temp => {

  //     var tempArr = [];

  //     temp.forEach(element => {
  //       if (element.source == "Squiggle") tempArr.push(element)
  //     })

  //     this.ladder = tempArr;
  //   });


  // }


// getting the upcoming matches
  getUpcomingMatches():void{
    this.dataService.getGames().subscribe(temp=>{
      var tempArr=[];

      temp.forEach(element=>{
        if(element.year==2019 && element.round==20){
         tempArr.push(element)
        }


        this.upcoming=tempArr;
      })
    })
  }

}



