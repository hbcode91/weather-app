import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { SettingsPageComponent } from "./components/settings-page/settings-page.component";
import { LoggedInGuard } from "./guards/logged-in.guard";
import { PlaceResolver } from "./resolvers/place.resolver";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'settings', component: SettingsPageComponent,
    canActivate: [LoggedInGuard],
    resolve: {
      cities: PlaceResolver
    }
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
