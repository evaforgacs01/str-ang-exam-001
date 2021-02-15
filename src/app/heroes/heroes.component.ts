import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = new Hero;


  superPowers: Array<string> = [
    "magnetic",
    "really smart",
    "rich",
    "hard",
    "biking",
    "Sticky",
    "strong"
  ];


  constructor(
    private hService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
