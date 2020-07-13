import { Injectable } from '@angular/core';
import { HeroModel } from '../model/hero.model';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Array<HeroModel> = [];
  private heroesUrl = `https://localhost:5001/Home/GetHeroesList`;
  httpOtions = {
   
  };
  constructor(private _messagesService: MessageService, private _http: HttpClient) { }

  getHeroes(): Array<HeroModel> {
    this._http.get(this.heroesUrl).subscribe(
      (resp: any) => {
        this.heroes.push(resp);
      }
    );
    return this.heroes;
  }
  addHero(hero: HeroModel) {
    // return this._http.post<HeroModel>(this.heroesUrl,hero,this.httpOtions);
    return this._http.post(this.heroesUrl, hero, this.httpOtions).subscribe((newHero: any) => {
      this.heroes.push(newHero);
    });
  }
  // deleteHero(hero:HeroModel|number):Observable<HeroModel>{
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;
  //   // return this._http.delete<HeroModel>();
  //   return this._http.delete(this.heroesUrl,this.httpOtions);
  // }
}
