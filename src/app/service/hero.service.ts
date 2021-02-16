import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {



  heroList: Hero[] = [
    {
      id: 1,
      name: "Superman",
      superpower: "strong",
      address: "NYC"

    },
    {
      id: 2,
      name: "Spiderman",
      superpower: "sticky",
      address: "LA"

    },
    {
      id: 3,
      name: "WonderWoman",
      superpower: "biking",
      address: "Washington"

    },
    {
      id: 4,
      name: "Ironman",
      superpower: "hard",
      address: "Canada"

    },
    {
      id: 5,
      name: "Batman",
      superpower: "rich",
      address: "San Fransisco"

    },
    {
      id: 6,
      name: "Magneto",
      superpower: "magnetic",
      address: "Italy"

    },
    {
      id: 7,
      name: "Superbrain",
      superpower: "really smart",
      address: "UK"

    },
    {
      id: 8,
      name: "Bombastic",
      superpower: "bombastic",
      address: "UK"

    },
    {
      id: 9,
      name: "Superskinny",
      superpower: "skinny",
      address: "Alaska"

    },
    {
      id: 10,
      name: "Brainreader",
      superpower: "brainreader",
      address: "Australia"

    }
  ];


  constructor() {

  }

  getAll(): Hero[] {
    return this.heroList;
  }

}

