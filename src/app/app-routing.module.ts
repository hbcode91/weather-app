import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
