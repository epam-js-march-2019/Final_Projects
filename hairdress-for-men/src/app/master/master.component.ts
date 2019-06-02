import {Component, Input, OnInit} from '@angular/core';
import {Master} from "../domain/Master";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  @Input() master: Master;

  constructor() { }

  ngOnInit() {
  }

}
