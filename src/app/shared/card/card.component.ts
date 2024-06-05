import { Component, Input, OnInit } from '@angular/core';
import { LocationWeather } from "../../models/location-weather";
import { Location } from "../../models/location";
import { WeatherApiService } from "../../services/weather-api.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public location!: Location;
  public locationWeather!: LocationWeather;

  constructor(private weatherApiService: WeatherApiService) {
  }

  ngOnInit(): void {
    this.weatherApiService.get(this.location.latitude, this.location.longitude)
      .subscribe({
        next: (response) => {
          this.locationWeather = response.current
        }
      });
  }

}
