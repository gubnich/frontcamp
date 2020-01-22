import { Component, OnInit, Input } from '@angular/core';
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
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.form = this.fb.group({
      heading: [this.data.title, [Validators.required]],
      description: [this.data.description],
      content: [this.data.content, [Validators.required]],
      imageUrl: [this.data.urlToImage],
      date: [this.data.publishedAt && new Date(this.data.publishedAt).toISOString().substr(0, 10)],
      author: [this.data.author],
      sourceUrl: [this.data.sourceUrl],
    });
  }

  onSubmit() {
    console.log('submit', this.form.value)
  }

  back() {
    this.location.back()
  }
}
