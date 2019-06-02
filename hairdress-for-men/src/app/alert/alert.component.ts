import {Component, Input, OnInit} from '@angular/core';

export enum Alert {
  BAD_CREDENTIALS = "Login or password is wrong.",
  PASSWORDS_ARE_DIFFERENT = "Пароли не совпадают.",
  USER_HAS_ALREADY_EXIST = "Пользователь с таким именем уже существует.",
  DATE_IS_BEFORE_THAN_NOW = "Дата записи должна быть не раньше следующего дня."
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor() { }

  ngOnInit() {
  }

}
