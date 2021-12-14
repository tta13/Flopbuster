import { Component, OnInit } from '@angular/core';
import { FlopVoteService } from './flop-vote.service';

@Component({
  selector: 'app-flop-votes',
  templateUrl: './flop-votes.component.html',
  styleUrls: ['./flop-votes.component.css']
})
export class FlopVotesComponent implements OnInit {

  title = 'Flop Votes!';

  constructor(private flopVoteService: FlopVoteService) { }

  ngOnInit(): void {
    this.flopVoteService = new FlopVoteService();
  }

  retrieveMovieList() { return this.flopVoteService.movieList; }

  choseMovie(): boolean { return this.flopVoteService.choseMovie; }

  chooseMovie(event){
    this.flopVoteService.chooseMovie(event.event, event.movie);
  }

}
