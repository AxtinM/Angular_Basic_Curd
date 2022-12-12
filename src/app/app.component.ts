import { Component } from '@angular/core';
import { tokenChange } from './tokenChange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ang_Proj_Crud';
  loggedIn!: boolean;

  ngOnInit(): void {
    tokenChange.subscribe((res) => {
      console.log(res);
      if (res) {
        console.log('first');
        this.loggedIn = true;
      } else {
        console.log('second');
        this.loggedIn = false;
      }
    });
  }
}
