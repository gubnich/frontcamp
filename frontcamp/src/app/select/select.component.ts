import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() data;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('select', this.data)
  }

  onChange(sourceId) {
    this.select.emit(sourceId);
  }
}
