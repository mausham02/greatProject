import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../Team';
import { Game } from '../Games';
import { Tip } from '../Tip';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input()

  games: Game[];

  constructor() { }

  ngOnInit() {
  }
}






