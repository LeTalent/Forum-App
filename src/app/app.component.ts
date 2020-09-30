import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(private authService: AuthService, private media: MediaObserver) { }

  ngOnInit() {
    this.authService.autoAuthUser();

    this.media.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias)
    })
  }
}
