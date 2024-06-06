import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LoginComponent } from "./components/login/login.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { LoggedInGuard } from "./guards/logged-in.guard";
import { LocationResolver } from "./resolvers/location.resolver";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [LoggedInGuard],
    resolve: {
      locations: LocationResolver
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
