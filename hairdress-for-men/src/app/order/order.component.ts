import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() service: string;
  @Input() master: string;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
