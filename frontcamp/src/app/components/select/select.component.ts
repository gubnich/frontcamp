import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() data;
  @Output() select = new EventEmitter();
  public selectedValue;
  constructor() { 
  }
  
  ngOnInit() {
    this.selectedValue = this.data[0];
    console.log('select', this.data);
  }

  onChange() {
    this.select.emit(this.selectedValue);
  }
}
