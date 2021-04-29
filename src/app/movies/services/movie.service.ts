import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies').pipe(
    );
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`http://localhost:3000/${movieId}`);
  }
}
