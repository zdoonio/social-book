import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  user = {
    email: null,
    password: null
  };

  errorMessage: string = null;

  constructor(
    private router: Router
  ) { }

  async handleSubmit() {
    try {
      this.router.navigate(['/']);
    } catch (err) {
      this.errorMessage = 'Niepoprawny email lub hasło';
    }
  }

  ngOnInit() {
  }

}
