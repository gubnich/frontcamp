import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, ChangeDetectorRef } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { tap, map, toArray } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public sources;
  // public articles$: Observable<any>;
  public articles;
  public localArticles;
  public selectedSource;
  public sources$: Observable<Array<{}>>;
  public showLocalOnly = false;
  public page = 1;

  @ViewChild("localNewsContainer", { read: ViewContainerRef, static: false }) localNewsContainer;
  localNewsComponentRef: ComponentRef<any>;
  @ViewChild("newsContainer", { read: ViewContainerRef, static: false }) newsContainer;
  newsComponentRef: ComponentRef<any>;

  constructor(private newsService: NewsService, private resolver: ComponentFactoryResolver, private cd: ChangeDetectorRef, private filterPipe: FilterPipe) {
  }
  
  ngOnInit() {
    this.newsService.getSelectedSource().subscribe(
      source => {
        this.page = 1;
        this.selectedSource = source;
        this.getArticles(source['id']);
      })
  
  
    this.newsService.getFilterValue().subscribe(
      value => {
        this.newsContainer.clear();
        this.filterPipe.transform(this.articles, value).forEach(element => {
          console.log(element)
          this.createComponent('', element)
        })
      })
      
    this.getSources();
    this.getArticles('abc-news-au');
    this.sources$.subscribe(item => this.selectedSource = item[0]);
    this.getLocalArticles();
  }


  createComponent(type, data) {
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(CardComponent);

    if (type === 'local') {
      this.localNewsComponentRef = this.localNewsContainer.createComponent(factory);
      this.localNewsComponentRef.instance.type = type;
      this.localNewsComponentRef.instance.data = data;
    } else {
      this.newsComponentRef = this.newsContainer.createComponent(factory);
      this.newsComponentRef.instance.type = type;
      this.newsComponentRef.instance.data = data;

    }

  }

  setSelectedSource(val) {

  }

  setShowLocalOnly($event) {
    if ($event) {
      this.newsContainer.clear();

    } else {
      this.articles.forEach(element => {
        this.createComponent('', element)
      })

    }
  }

  getSources() {
    this.sources$ = this.newsService.getSources();
  }

  // getArticles(sourceId) {
  //   // this.articles$ = this.newsService.getArticles(sourceId);
  //   this.newsService.getArticles(sourceId).then(
  //     res => this.articles$ = res
  //   );
  // }

  getArticles(sourceId) {
    // this.articles$ = this.newsService.getArticles(sourceId);
    this.newsService.getArticles(sourceId, this.page).then(
      ({articles}) => {
        this.newsContainer.clear();
        console.log('/////////', 'сюда', articles)
        this.articles = articles;
        articles.forEach(element => {
          this.createComponent('', element)
        });
        this.page++;
      }
    );
  }

  getLocalArticles() {
    // this.articles$ = this.newsService.getArticles(sourceId);
    this.newsService.getLocalArticles().then(
      // res => this.localArticles = res
      (res: []) => res.forEach(element => {
        this.createComponent('local', element)
      })
    );
  }

  loadMore() {
    console.log('////////////////////////////////')
    this.newsService.getArticles(this.selectedSource['id'], this.page).then(
      ({articles}) => {
        // this.articles = [...this.articles, ...articles];
        // this.newsContainer.clear();
        console.log('/////////', 'сюда', articles)
        articles.forEach(element => {
          this.createComponent('', element)
        });
        this.page++;
      }
    );
  }

  filterArticles(e) {
    console.log('///////////////////', e)
  }
}
