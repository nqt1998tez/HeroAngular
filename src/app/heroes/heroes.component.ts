
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { throws } from 'assert';
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: HeroModel;
    heroes: Array<HeroModel> = [];
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private _http: HttpClient, private _heroService: HeroService, private messageService: MessageService) {
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes() {
        this._http.get(`https://localhost:5001/Home/GetHeroesList`).subscribe((resp: any[]) => {
            console.log(resp);
            for (let i = 0; i < resp.length; i++) {
                var hero = new HeroModel();
                hero.id = resp[i].id;
                hero.name = resp[i].name;
                this.heroes.push(hero);
            }

        });
    }
    addHero(hero: string) {

        var heroData = new HeroModel();
        heroData.name = hero;
        heroData.id = this.heroes.length + 1;
        const postData = JSON.stringify(heroData);
        this._http.post(`https://localhost:5001/Home/PostNewHero`, postData, this.httpOptions).subscribe((resp: any) => {
            this.heroes.push(resp);
        });

    }
    onDeleteHero(hero: HeroModel) {
        this._http.post(`https://localhost:5001/Home/DeleteHero`, hero, this.httpOptions).subscribe((resp: any) => {


            let heroIndex = -1;
            for (let index = 0; index < this.heroes.length; index++) {
                if (hero.id == this.heroes[index].id) {

                    console.log(index);
                    heroIndex = index;
                    break;
                }
            }
            if (heroIndex >= 0)
                this.heroes.splice(heroIndex, 1);
        });
    }
    onSelect(hero: HeroModel) {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
}
