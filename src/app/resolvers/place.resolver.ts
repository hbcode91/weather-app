import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PlaceService } from "../services/place.service";
import { City } from "../models/city";

@Injectable({
  providedIn: 'root'
})
export class PlaceResolver implements Resolve<City[]> {
  constructor(private placeService: PlaceService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<City[]> {
    return this.placeService.getCities();
  }
}
