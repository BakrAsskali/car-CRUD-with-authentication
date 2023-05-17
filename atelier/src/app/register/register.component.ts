import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router) {
    localStorage.removeItem('jwt');
  }

  async register() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      username: this.username.value,
      password: this.password.value,
    });

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5000/register', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem('jwt', result.token);
          this.router.navigate(['/']);
        }
      });
  }
}
