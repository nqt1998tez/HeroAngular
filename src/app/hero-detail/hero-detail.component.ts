import { Component, OnInit, Input } from '@angular/core';
import { HeroModel } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroModel;
  constructor() { }

  ngOnInit(): void {
  }

}
