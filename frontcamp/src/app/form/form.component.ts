import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formChange = new EventEmitter();
  form = new FormGroup({
    heading: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
    imageUrl: new FormControl(''),
    date: new FormControl(''),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }

  onHeadingChange() {
    this.formChange.emit(this.form.value.heading);
  }

  onSubmit() {
    console.log('submit', this.form.value)
  }
}
