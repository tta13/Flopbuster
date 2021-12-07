import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flopbuster';

  movieList = [
    {
      title: 'Guardians of the Galaxy',
      year: '2014',
      posterUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1P_hV6E3_OlEq4MdFMQje5SyBUkAH0JKasP_iVJG4HMT69xn2',
      voted: false
    },
    {
      title: 'La La Land',
      year: '2016',
      posterUrl: 'https://br.web.img2.acsta.net/pictures/17/01/24/17/13/228823.jpg',
      voted: false
    },    
    {
      title: 'Spiderman: No Way Home',
      year: '2021',
      posterUrl: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
      voted: false
    },
    {
      title: 'Interstellar',
      year: '2014',
      posterUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm2leyMGMJ84bXC4xcNE3nhwuFw__agAGieUDxrkA8qSLNAfh5',
      voted: false
    }
  ]

  choseMovie: boolean = false;

  chooseMovie(event, movie) {
    let chosenMovie = this.movieList.find((someMovie) => someMovie.title == movie.title);
    if(chosenMovie == undefined) return;
    if(!chosenMovie.voted) {
      chosenMovie.voted = true;
      this.choseMovie = true;
      event.target.innerText = 'Unvote';
      console.log('User chose: ' + chosenMovie.title);
    } else{      
      chosenMovie.voted = false;
      this.choseMovie = false;
      event.target.innerText = 'Vote';
    }
  }
}
