import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn!: boolean;
  constructor() {}

  ngOnInit(): void {
    const token = localStorage.getItem('id_token');
    if (token) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
