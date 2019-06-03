import {Component, OnInit} from '@angular/core';
import {AuthService} from "../app-services/auth.service";
import {Router} from "@angular/router";
import {Link} from "../domain/Link";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Like at home';
  authLinks: Array<Link> = [
    {url: '/about', name: 'О нас'},
    {url: '/contacts', name: 'Контакты'},
    {url: '/services', name: 'Услуги'},
    {url: '/my-orders', name: 'Мои заказы'}
  ];
  noAuthLinks: Array<Link> = [
    {url: '/about', name: 'О нас'},
    {url: '/contacts', name: 'Контакты'},
    {url: '/services', name: 'Услуги'},
    {url: '/login', name: 'Войти'}
  ];

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
