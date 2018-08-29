import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../schema/hero.schema';

import { HEROES } from '../../data/mock_heroes';




@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes() : Observable <Hero[]> {
    return of(HEROES);
  }
}
