import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { tap, map, toArray } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public sources;
  // public articles$: Observable<any>;
  public articles$;
  public localArticles;
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
    this.getArticles('abc-news-au');
    this.sources$.subscribe(item => this.selectedSource = item[0]);
    this.getLocalArticles();
  }

  setSelectedSource(val) {
   
  }

  getSources() {
    this.sources$ = this.newsService.getSources();
  }

  getArticles(sourceId) {
    // this.articles$ = this.newsService.getArticles(sourceId);
    this.newsService.getArticles(sourceId).then(
      res => this.articles$ = res
    );
  }

  getLocalArticles() {
    // this.articles$ = this.newsService.getArticles(sourceId);
    this.newsService.getLocalArticles().then(
      res => this.localArticles = res
    );
  }

  loadMore(sourceId) {
    this.newsService.getArticles(sourceId).then(
      res => this.articles$ = [...this.articles$, ...res]
    );
  }
}
