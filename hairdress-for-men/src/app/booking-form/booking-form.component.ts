import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../domain/Service";
import {Master} from "../domain/Master";
import {DataService} from "../app-services/data.service";
import {Order} from "../domain/Order";
import {Alert} from "../alert/alert.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  services: Array<Service>;
  masters: Array<Master>;
  order: Order = new Order();
  error: Alert;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.services = this.dataService.getServices();
    this.masters = this.dataService.getMasters();
  }

  makeOrder() {
    if (this.dateIsBeforeThanNow()) {
      this.error = Alert.DATE_IS_BEFORE_THAN_NOW;
    } else {
      this.dataService.saveMyOrder(this.order);
      this.router.navigate(['my-orders']);
    }
  }

  private dateIsBeforeThanNow(): boolean {
    return new Date(this.order.date) < new Date();
  }

  isNotValid() {
    return this.order.service === undefined ||
      this.order.master === undefined ||
      this.order.date === undefined ||
      this.order.date.toString() === "";
  }
}
