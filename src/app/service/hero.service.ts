import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      id: 1,
      name: "Superman",
      superpower: "strong",
      address: "NYC"

    },
    {
      id: 2,
      name: "Spiderman",
      superpower: "Sticky",
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
      superpower: "really smart",
      address: "Italy"

    },
    {
      id: 7,
      name: "Superbrain",
      superpower: "magnetic",
      address: "UK"

    }
  ];


  constructor() { }

  getAll() {

  }

}

