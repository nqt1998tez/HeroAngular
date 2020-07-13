import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroModel } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InmemoryDataService implements InMemoryDbService {

  createDb() {
    const hereos: Array<HeroModel> = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }];
    return hereos;
  }

  genId(heroes: Array<HeroModel>): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1 :11;
  }
  constructor() { }
}
