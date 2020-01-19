import { Component, OnInit } from '@angular/core';
import { mock } from '../mock';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(mock)
  }

}
