import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }
}
