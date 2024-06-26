import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any[] = [];
  query: string = '';

  constructor(private movieService: MovieService, private router: Router) {}

  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe((response: any) => {
      this.movies = response.Search;
    });
  }

  goToDetails(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
