import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public sources;
  public articles$: Observable<any>;
  public selectedSource;
  public sources$: Observable<Array<{}>>;

  constructor(private newsService: NewsService) {
    this.newsService.getSelectedSource().subscribe(
      source => {
        this.selectedSource = source;
        this.getArticles(source['id'])
      })
      
    
  }

  ngOnInit() {
    this.getSources();
    // this.getArticles();
    this.sources$.subscribe(item => this.selectedSource = item[0])
  }

  setSelectedSource(val) {
   
  }

  getSources() {
    this.sources$ = this.newsService.getSources();
  }

  getArticles(sourceId) {
    this.articles$ = this.newsService.getArticles(sourceId);
  }

  loadMore() {
    // this.articles = [...this.articles, ...this.newsService.getArticles()];
  }
}
