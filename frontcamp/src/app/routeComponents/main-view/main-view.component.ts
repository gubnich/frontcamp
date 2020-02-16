import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public articles = [];
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

  getArticles(sourceId) {
    this.newsService.getArticles(sourceId, this.page).then(
      ({ articles }) => {
        this.newsContainer.clear();
        this.articles = articles;
        articles.forEach(element => {
          this.createComponent('', element)
        });
        this.page++;
      }
    );
  }

  getLocalArticles() {
    this.newsService.getLocalArticles().then(
      (res: []) => res.forEach(element => {
        this.createComponent('local', element)
      })
    );
  }

  loadMore() {
    this.newsService.getArticles(this.selectedSource['id'], this.page).then(
      ({ articles }) => {
        articles.forEach(element => {
          this.createComponent('', element)
        });
        this.page++;
      }
    );
  }
}
