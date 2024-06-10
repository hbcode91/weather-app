import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { City } from "../../models/city";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public cities!: City[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.cities = data['cities'];
    });
  }


  public remove(index: number) {
    if (window.confirm("Do you really want to remove this item ?")) {
      this.cities.splice(index, 1);
    }
  }
}
