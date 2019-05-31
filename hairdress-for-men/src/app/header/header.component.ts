import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'hairdress-for-men';
  noAuthLinks: Array<Object> = [{url: '/admin', name: 'Admin'}];
  authLinks: Array<Object> = [{url: '/login', name: 'Login'},
                              {url: '/about', name: 'About'}];
  auth: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  isLogged() {
    return this.auth;
  }

  log() {
    this.auth = !this.auth;
  }
}
