import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from "../models/location";
import { LocationService } from "../services/location.service";

@Injectable({
  providedIn: 'root'
})
export class LocationResolver implements Resolve<Location[]> {

  constructor(private locationService: LocationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location[]> {
    return this.locationService.getLocations();
  }
}
