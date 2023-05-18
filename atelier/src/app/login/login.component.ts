import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private carService: CarServiceService) {
    localStorage.setItem('jwt', '');
  }

  login() {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      username: this.username,
      password: this.password,
    });

    let requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:5000/login', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('jwt', result.data.jwt);
        window.location.href = '/cars';
      })
      .catch((error) => console.log('error', error));
  }
}
