import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent implements OnInit {
  @Input() sources;
  @Output() showLocal = new EventEmitter;
  constructor(public newsService: NewsService, private router: Router) { }

  ngOnInit() { 
    // console.log('/////////////', this.sources)
  }

  add() {
    this.router.navigate(['add'])
  }

  onCheckboxChange() {
    this.showLocal.emit();
  }
}
