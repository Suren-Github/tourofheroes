import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../schema/hero.schema';

import { HEROES } from '../../data/mock_heroes';

import { MessageService } from '../../services/message/message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { 

  }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes() : Observable <Hero[]> {
    this.messageService.add('HeroService: fetched_heroes');
    return of(HEROES);
  }
}
