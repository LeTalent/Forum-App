import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AuthData } from '../../auth/auth-data.model'
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  userEmail: string;
  authData: AuthData;
  opened = true;
  @Input() sidenav: MatSidenav;


  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      })

    this.userEmail = this.authService.getUserEmail();
    console.log(this.userEmail);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
