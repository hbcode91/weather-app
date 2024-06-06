import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { MetersToKmPipe } from './pipes/meters-to-km.pipe';
import { WeatherCardComponent } from "./components/weather-card/weather-card.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { TooltipDirective } from './directives/tooltip.directive';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SettingsComponent,
    LoginComponent,
    WeatherCardComponent,
    MetersToKmPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
