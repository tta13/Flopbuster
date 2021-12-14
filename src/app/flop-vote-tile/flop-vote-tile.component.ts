import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flop-vote-tile',
  templateUrl: './flop-vote-tile.component.html',
  styleUrls: ['./flop-vote-tile.component.css']
})
export class FlopVoteTileComponent implements OnInit {

  @Input() movie;
  @Input() choseMovie;
  @Output() onVoteMovie = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onVoteButtonClicked(event) {
    this.onVoteMovie.emit({event: event, movie: this.movie})
  }

}
