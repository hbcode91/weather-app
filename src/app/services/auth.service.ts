import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminLogged = false;
  public authChanges$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  logIn() {
    this.isAdminLogged = true;
    this.authChanges$.next(this.isAdminLogged);
  }

  logOut() {
    this.isAdminLogged = false;
    this.authChanges$.next(this.isAdminLogged);
  }

  isAdminUser() {
    return this.isAdminLogged || true;
  }
}
