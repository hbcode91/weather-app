import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { CardModule } from "../../shared/card/card.module";


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule {
}
