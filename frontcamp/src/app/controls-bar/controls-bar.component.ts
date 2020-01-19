import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent implements OnInit {
  @Input() sources;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    console.log('bar', this.sources)
  }
}
