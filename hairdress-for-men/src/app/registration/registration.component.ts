import {Component, OnInit} from '@angular/core';
import {Alert} from "../alert/alert.component";
import {AuthService} from "../app-services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  repeatedPassword: string;
  error: Alert;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    this.error = this.authService.register(this.username, this.password, this.repeatedPassword);
  }

}
