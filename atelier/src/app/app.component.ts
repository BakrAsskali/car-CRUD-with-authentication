import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'atelier';

  isloggedIn() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }
}
