import { Component, OnInit } from '@angular/core';
import {Master} from "../domain/Master";
import {DataService} from "../app-services/data.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  masters: Array<Master> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.masters = this.dataService.getMasters();
  }
}
