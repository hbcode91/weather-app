import { Injectable } from '@angular/core';
import { City } from "../models/city";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public cities: City[] = [
    {
      name: 'Lattes',
      latitude: 43.5677,
      longitude: 3.9028
    },
    {
      name: 'Montpellier',
      latitude: 43.6109,
      longitude: 3.8763
    },
    {
      name: 'Paris',
      latitude: 48.8534,
      longitude: 2.3488
    },
    {
      name: 'Lyon',
      latitude: 45.7485,
      longitude: 4.8467
    },
    {
      name: 'Toulouse',
      latitude: 43.6043,
      longitude: 1.4437
    },
    {
      name: 'Marseille',
      latitude: 43.297,
      longitude: 5.3811
    },
    {
      name: 'Nice',
      latitude: 43.7031,
      longitude: 7.2661
    },
    {
      name: 'Nantes',
      latitude: 47.2172,
      longitude: -1.5534
    },
    {
      name: 'Brest',
      latitude: 48.3903,
      longitude: -4.4863
    },
    {
      name: 'Saint-Etienne',
      latitude: 45.4339,
      longitude: 4.39
    }
  ];

  public getLocations(): Observable<City[]> {
    return of(this.cities);
  }
}
