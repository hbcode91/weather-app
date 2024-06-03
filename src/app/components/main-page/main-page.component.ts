import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
  }

}
