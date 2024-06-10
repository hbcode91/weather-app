import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location.service";
import { City } from "../../models/city";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public locations!: City[];

  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.getLocations()
      .subscribe({
        next: value => this.locations = value
      });
  }

}
