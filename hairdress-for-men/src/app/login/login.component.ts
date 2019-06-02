import { Component, OnInit } from '@angular/core';
import {AuthService} from "../app-services/auth.service";
import {Alert} from "../alert/alert.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: Alert;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.error = this.authService.login(this.username, this.password);
  }

  redirectToRegisterPage(): void {
    this.router.navigate(['registration']);
  }
}
