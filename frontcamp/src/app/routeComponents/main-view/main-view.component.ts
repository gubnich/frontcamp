import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public sources;
  public articles;
  public selectedSource;

  constructor(private newsService: NewsService) {
    this.newsService.getSelectedSource().subscribe(
      source => this.selectedSource = this.sources.find(item => item.id === source['id'])
    );
  }

  ngOnInit() {
    this.getSources();
    this.getArticles();
    this.selectedSource = this.sources[0]
  }

  getSources() {
    this.sources = this.newsService.getSources();
  }

  getArticles() {
    this.articles = this.newsService.getArticles();
  }

  loadMore() {
    this.articles = [...this.articles, ...this.newsService.getArticles()];
  }
}
