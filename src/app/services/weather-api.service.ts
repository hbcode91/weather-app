import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CurrentModel } from "../models/current.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private readonly API = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = ['temperature_2m', 'cloud_cover', 'wind_speed_10m', 'wind_direction_10m', 'visibility', 'is_day'];

  constructor(private http: HttpClient) {
  }

  get(latitude: number, longitude: number): Observable<{ current: CurrentModel }> {
    const params = {
      latitude,
      longitude,
      current: this.CURRENT_PARAMS
    };
    return this.http.get<{ current: CurrentModel }>(`${this.API}`, {params});
  }

}
