import { Component, OnInit,Input } from '@angular/core';
import {Tip} from '../Tip';

import {DataService} from '../data.service';
import { Team } from '../Team';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})




export class PredictionComponent implements OnInit {

  @Input() selectedTeam: Team;

  tips:Tip[];
  teams:Team[];

  

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAFLTeams();
  }

  onSelect(team: Team):void{
    this.selectedTeam=team;
    this.getMyTeamsPrediction();
    
  }

    //Get all the AFL Teams

    getAFLTeams():void{
      this.dataService.getTeams().subscribe(temp=>{this.teams=temp;});
    }


  //As a fan i want to see the prediction that my team will win their next game

  getMyTeamsPrediction(): void{

    this.dataService.getTips().subscribe(temp=>{
    var tempArr=[];
    
    temp.forEach(element=>{
          
          if(element.tipteamid==this.selectedTeam.id && element.round==20) tempArr.push(element)  
          })

          this.tips=tempArr;
          console.log(tempArr.length)
        })
 }

}
