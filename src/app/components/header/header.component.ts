import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input()
  public title!: string;
  public isAuthenticated!: boolean;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.authChanges$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: value => this.isAuthenticated = value
      });
  }

  public toggleAuth() {
    if (this.isAuthenticated) {
      this.authService.logOut();
    } else {
      this.router.navigate(['login']).then();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
