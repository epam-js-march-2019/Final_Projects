import { Component, OnInit } from '@angular/core';
import {Service} from "../domain/Service";
import {Router} from "@angular/router";
import {DataService} from "../app-services/data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Array<Service> = [];

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.getServices();
  }

  order() {
    this.router.navigate(['order']);
  }

  getServices() {
    this.services = this.dataService.getServices();
  }
}

