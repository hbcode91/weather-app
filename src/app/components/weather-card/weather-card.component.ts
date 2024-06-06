import { Component, Input, OnInit } from '@angular/core';
import { LocationWeather } from "../../models/location-weather";
import { Location } from "../../models/location";
import { WeatherApiService } from "../../services/weather-api.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input()
  public location!: Location;
  public locationWeather!: LocationWeather;
  public weatherIconUrl$!: Observable<string>;

  constructor(private weatherApiService: WeatherApiService) {
  }

  ngOnInit(): void {
    this.weatherApiService.get(this.location.latitude, this.location.longitude)
      .subscribe({
        next: (response) => {
          this.locationWeather = response.current
          this.weatherIconUrl$ = this.weatherApiService.getWeatherIconUrl(this.locationWeather.cloud_cover);
        }
      });
  }

}
