import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  @Input() hero: Hero = new Hero;
  heroList = this.heroService.getAll();



  // superPowers: Array<string> = [
  //   "magnetic",
  //   "really smart",
  //   "rich",
  //   "hard",
  //   "biking",
  //   "Sticky",
  //   "strong"
  // ];


  constructor(
    private heroService: HeroService,

  ) { }

  ngOnInit(): void {
  }

}
