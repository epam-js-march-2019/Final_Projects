import { Component, OnInit } from '@angular/core';
import {Order} from "../domain/Order";
import {DataService} from "../app-services/data.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Array<Order> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getMyOrders();
  }
}
