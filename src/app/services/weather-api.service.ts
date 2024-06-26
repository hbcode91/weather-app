import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Weather } from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private readonly API = 'https://api.open-meteo.com/v1/forecast';
  private readonly CURRENT_PARAMS = ['temperature_2m', 'cloud_cover', 'wind_speed_10m', 'wind_direction_10m', 'visibility', 'is_day', 'relative_humidity_2m'];

  constructor(private http: HttpClient) {
  }

  public get(latitude: number, longitude: number): Observable<Weather> {
    const params = {
      latitude,
      longitude,
      current: this.CURRENT_PARAMS
    };
    return this.http.get<Weather>(`${this.API}`, {params});
  }

  public getWeatherIconUrl(cloudCover: number): Observable<string> {
    let iconName = 'sun.svg';
    if (cloudCover > 20 && cloudCover <= 60) {
      iconName = 'sun_cloud.svg';
    } else if (cloudCover > 60) {
      iconName = 'cloud.svg';
    }

    return of(`./assets/icons/${iconName}`);
  }
}
