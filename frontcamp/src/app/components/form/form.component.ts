import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data = {
    title: '',
    description: '',
    content: '',
    urlToImage: '',
    publishedAt: '',
    author: '',
    sourceUrl: ''
  };
  @Output() submitEvent = new EventEmitter;
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.data.title, [Validators.required]],
      description: [this.data.description],
      content: [this.data.content, [Validators.required]],
      imageUrl: [this.data.urlToImage],
      publishedAt: [this.data.publishedAt ? new Date(this.data.publishedAt).toISOString().substr(0, 10): new Date().toISOString().substr(0, 10)],
      author: [this.data.author],
      sourceUrl: [this.data.sourceUrl],
    });
  }

  onSubmit() {
    // console.log('submit', this.form.value)
    this.submitEvent.emit(this.form.value);
  }

  back() {
    this.location.back()
  }
}
