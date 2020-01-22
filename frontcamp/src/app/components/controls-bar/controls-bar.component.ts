import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent implements OnInit {
  @Input() sources;

  constructor(public newsService: NewsService, private router: Router) { }

  ngOnInit() { }

  add() {
    this.router.navigate(['add'])
  }
}
