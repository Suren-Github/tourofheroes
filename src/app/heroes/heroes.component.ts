import { Component, OnInit } from '@angular/core';

import { Hero } from '../schema/hero.schema';
//import { HEROES } from '../data/mock_heroes'; 
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: `Windranger`
  }

  heroes: Hero[]; // = HeroService.getHeroes();

  selectedHero: Hero;

  displayHeroes = true;

  getHeroes(): void {
    //  this.heroes = this.heroService.getHeroes();
    
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.displayTime();
    this.getHeroes();
  }


  public timeNow = null;

  public countTime() {
    let date = new Date();
    this.timeNow = date.getHours() + `:` + date.getMinutes() + `:` + (date.getSeconds() <= 9 ? `0` : '') + date.getSeconds();
  }

  protected displayHeroDetails(hero: Hero): void {
    console.log(hero.name);
    this.selectedHero = hero;
  }

  displayTime() {
    this.countTime();
    setInterval(() => {
      this.countTime();
    }, 1000);
  };
}
