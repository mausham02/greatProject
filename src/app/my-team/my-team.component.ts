import { Component, OnInit } from '@angular/core';

import {Ladder} from '../Ladder';
import {DataService} from '../data.service';
import {Team} from '../Team';




@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  ladder:Ladder[];
  teams:Team[];



 
  


  constructor(private dataService:DataService  ) { }

  ngOnInit() {
    this.getTeams();
    this.getLadderBoard();

   
    
  }


  getTeams():void{

    this.dataService.getTeams().subscribe(temp=>this.teams=temp
    )
  }

  getLadderBoard():void{

    this.dataService.getLadder().subscribe(temp=>{
      
      var tempArr=[];

      temp.forEach(element=>{
        if(element.sourceid==1) tempArr.push(element)
      })
      this.ladder=tempArr;
   
    });
    

  }

  


 

}



