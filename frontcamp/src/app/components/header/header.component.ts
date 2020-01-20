import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sources;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getSources()
  }

  getSources() {
    this.sources = this.newsService.getSources();
  }
}
