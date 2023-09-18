import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  constructor(private pokeApiService: PokeApiService) { }

  public getAllPokemons: any
  private setAllPokemons: any
  public apiError: boolean = false

  ngOnInit(): void {
    this.pokeApiService.pokemonList.subscribe(
      (res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error: any) => {
        this.apiError = true;
      }
    );
  }

  public search(value: string) {
    const filter = this.setAllPokemons.filter(
      (res: any) => {
        return !res.name.indexOf(value.toLowerCase())
      }
    )

    this.getAllPokemons = filter
  }
}
