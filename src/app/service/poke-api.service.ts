import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  public baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=350';

  constructor(
    private http: HttpClient
  ) { }

  get pokemonList(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
      .pipe(
        tap(res => res),
        tap(res => {
          res.results.map((resPokemons: any) => {
            this.apiGetPokemons(resPokemons.url).subscribe(res => resPokemons.status = res);
          })
        })
      );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(res => res))
  }
}
