import {Injectable} from '@angular/core';
import {Alert} from "../alert/alert.component";
import {Router} from "@angular/router";

export const currentUser = "currentUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private redirectUrl: string;

  constructor(private router: Router) {
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(currentUser) !== null;
  }

  logout(): void {
    localStorage.removeItem(currentUser);
    this.router.navigate(['/login']);
  }

  login(username: string, password: string): Alert {
    console.log("try to log ");
    let userPassword = localStorage.getItem(username);
    if (password !== null && password === userPassword) {
      localStorage.setItem(currentUser, username);

      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl])
          .then(this.redirectUrl = null);
      } else {
        this.router.navigate(['']);
      }
    } else {
      return Alert.BAD_CREDENTIALS;
    }
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  register(username: string, password: string, repeatedPassword: string): Alert {
    if (password !== repeatedPassword) {
      return Alert.PASSWORDS_ARE_DIFFERENT;
    } else if (localStorage.getItem(username) !== null) {
      return Alert.USER_HAS_ALREADY_EXIST;
    }

    localStorage.setItem(username, password);
    localStorage.setItem(currentUser, username);
    this.router.navigate(['']);
  }
}

