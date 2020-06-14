import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(form) {
    this.authService.login(form.value)
      .subscribe(() => this.router.navigate(['/home']));
  }
}
