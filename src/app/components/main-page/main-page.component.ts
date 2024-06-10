import { Component, OnInit } from '@angular/core';
import { PlaceService } from "../../services/place.service";
import { City } from "../../models/city";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public cities!: City[];

  constructor(public placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.placeService.getCities()
      .subscribe({
        next: value => this.cities = value
      });
  }

}
