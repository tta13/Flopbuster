import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flop-vote-tile',
  templateUrl: './flop-vote-tile.component.html',
  styleUrls: ['./flop-vote-tile.component.css']
})
export class FlopVoteTileComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit(): void {
  }

}
