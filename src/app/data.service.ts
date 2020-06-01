import { Injectable } from '@angular/core';

import {Team} from './Team';
import {Game} from './Games';
import {Tip} from './Tip';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getTeams(): Observable<Team[]>
  {
    return this.http.get('https://api.squiggle.com.au/?q=teams').
    pipe(map((data:any)=>data.teams.map((item:any)=>
    new Team(
      item.name,
      item.logo,
      item.id,
      item.abbrev
  ))))

  }

  getGames(): Observable<Game[]>
  {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019').pipe(
      map((data:any)=>data.games.map((item: any)=>new Game(

        item.is_grand_final,
        item.hbehinds,
        item.abehinds,
        item.hteam,
        item.round,
        item.hgoals,
        item.winnerteamid,
        item.ateamid,
        item.is_final,
        item.venue,
        item.date,
        item.year,
        item.complete,
        item.ascore,
        item.tz,
        item.updated,
        item.agoals,
        item.id,
        item.ateam,
        item.winner,
        item.hscore,
        item.hteamid
 )))
    )
  }


  getTips(): Observable<Tip[]>
  {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;round=20').pipe(
      map((data:any)=>data.tips.map((item:any)=>new Tip(

        item.tip,
        item.round,
        item.ateamid,
        item.venue,
        item.correct,
        item.date,
        item.margin,
        item.err,
        item.hteam,
        item.tipteamid,
        item.source,
        item.confidence,
        item.ateam,
        item.bits,
        item.hteamid,
        item.sourceid,
        item.year,
        item.updated,
        item.confidence



      )))
    )
  } 


}
