import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "../../models/location";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public locations!: Location[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.locations = data['locations'];
    });
  }


  public remove(index: number) {
    if (window.confirm("Do you really want to remove this item ?")) {
      this.locations.splice(index, 1);
    }
  }
}
