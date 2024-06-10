import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { City } from "../models/city";
import { LocationService } from "../services/location.service";

@Injectable({
  providedIn: 'root'
})
export class LocationResolver implements Resolve<City[]> {

  constructor(private locationService: LocationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<City[]> {
    return this.locationService.getLocations();
  }
}
