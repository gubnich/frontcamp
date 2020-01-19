import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public sources;
  public articles;
  public selectedSourceName;

  constructor(private newsService: NewsService) {
    this.newsService.getSelectedSourceId().subscribe(
      id => this.selectedSourceName = this.sources.find( item => item.id === id).name
    );
  }

  ngOnInit() {
    this.getSources();
    this.getArticles();
  }

  getSources(): void {
    this.sources = this.newsService.getSources();
  }

  getArticles(): void {
    this.articles = this.newsService.getArticles();
  }

}
