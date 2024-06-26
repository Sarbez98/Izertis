import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=5f9fb023b77d1a9683cdb23c96e6f7dc';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${query}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&i=${id}`);
  }
}
