import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      this.localStorageService.get('id_token') != undefined
        ? (this.loggedIn = true)
        : (this.loggedIn = false);

      console.log(this.loggedIn);
    });
  }

  logout() {
    this.localStorageService.remove('id_token');
  }
  title = 'Ang_Proj_Crud';
  loggedIn!: boolean;

  ngOnInit(): void {
    this.localStorageService.get('id_token') != undefined
      ? (this.loggedIn = true)
      : (this.loggedIn = false);
  }
}
