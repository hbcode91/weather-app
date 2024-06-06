import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location.service";
import { Location } from "../../models/location";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public locations!: Location[];

  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.getLocations()
      .subscribe({
        next: value => this.locations = value
      });
  }

}
