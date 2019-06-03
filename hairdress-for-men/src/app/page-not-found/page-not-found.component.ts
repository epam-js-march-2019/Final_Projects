import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorText: string = "К сожалению, данная страница не найдена.";

  constructor() { }

  ngOnInit() {
  }
}
