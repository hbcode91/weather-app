import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public login = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  public submit() {
    if (!this.login || !this.password) {
      window.alert('You must fill all required fields');
    } else if (this.login === 'test' && this.password === 'test') {
      this.authService.logIn();
      this.router.navigate(['/']).then();
    } else {
      window.alert('Login or password are wrong');
    }
  }
}
