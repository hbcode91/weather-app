import { Component, Input, OnInit } from '@angular/core';
import { CurrentModel } from "../../models/current.model";
import { LocationModel } from "../../models/location.model";
import { WeatherApiService } from "../../services/weather-api.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public location!: LocationModel;
  public current!: CurrentModel;

  constructor(private weatherApiService: WeatherApiService) {
  }

  ngOnInit(): void {
    this.weatherApiService.get(this.location.latitude, this.location.longitude)
      .subscribe({
        next: (response) => {
          this.current = response.current
        }
      });
  }

}
