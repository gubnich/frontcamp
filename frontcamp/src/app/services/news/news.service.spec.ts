import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { Subject } from 'rxjs';

import { NewsService } from './news.service';
import { mock } from './mock';

const API_KEY = 'ba5992c165544bceb02618e82aa9d2ff';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [NewsService]
    });
    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve sources from the API via GET', () => {
    service.getSources().subscribe((sources: any) => {
      expect(sources[0].id).toBe(mock.sources[0].id);
    });
    const request = httpMock.expectOne(`https://newsapi.org/v1/sources?apiKey=${API_KEY}`);
    expect(request.request.method).toBe('GET');
    request.flush({ sources: mock.sources });
  });

  it('be able to retrieve articles from the API via GET', () => {
    const mockSourceId = 'mockSourceId';
    service.getArticles(mockSourceId, 1).then((articles: any) => {
      expect(articles[0].title).toBe(mock.articles[0].title);
    });
    const request = httpMock.expectOne(`https://newsapi.org/v2/top-headlines?sources=${mockSourceId}&apiKey=${API_KEY}&pageSize=5&page=1`);
    expect(request.request.method).toBe('GET');
    request.flush(mock.articles);
  });

  it('be able to retrieve local articles from the API via GET', () => {
    service.getLocalArticles().then((articles: any) => {
      expect(articles[0].title).toBe(mock.articles[0].title);
    });
    const request = httpMock.expectOne('/local/all');
    expect(request.request.method).toBe('GET');
    request.flush(mock.articles);
  });

  it('should return selected article', () => {
    const article = { article: 'article' };
    service.selectedArticle = article;
    service.getArticle()
    expect(service.selectedArticle).toEqual(article);
  });

  it('be able to retrieve local article from the API via GET', () => {
    service.getLocalArticle('id').then((articles: any) => {
      expect(articles[0].title).toBe(mock.articles[0].title);
    });
    const request = httpMock.expectOne(`/local/article/id`);
    expect(request.request.method).toBe('GET');
    request.flush(mock.articles);
  });

  it('be able to create article from the API via PUT', () => {
    service.createArticle(mock.articles[0]).then((article: any) => {
      expect(article.title).toBe(mock.articles[0].title);
    });
    const request = httpMock.expectOne(`/local/add`);
    expect(request.request.method).toBe('PUT');
    request.flush(mock.articles[0]);
  });

  it('should return selected source', () => {
    service.selectedSource$ = 'selectedSource' as any;
    expect(service.getSelectedSource()).toEqual(service.selectedSource$);
  });

  it('should set selected source', () => {
    service.selectedSource$ = new Subject();
    let expected;
    service.selectedSource$.subscribe(val => expected = val);
    service.setSelectedSource('value');
    expect(expected).toBe('value');
  });

  it('should set filter value', () => {
    service.filterValue$ = new Subject();
    let expected;
    service.filterValue$.subscribe(val => expected = val);
    service.setFilterValue('value');
    expect(expected).toBe('value');
  });

  it('should return filter value', () => {
    service.filterValue$ = 'filterValue' as any;
    expect(service.getFilterValue()).toEqual(service.filterValue$);
  });

  it('should set selected article', () => {
    let article = { article: 'article'};
    service.setSelectedArticle(article);
    expect(service.selectedArticle).toEqual(article);
  });

  it('be able to delete article from the API via DELETE', () => {
    service.deleteArticle('id').then((article: any) => {
      expect(article.title).toBe(mock.articles[0].title);
    });
    const request = httpMock.expectOne(`/local/article/id`);
    expect(request.request.method).toBe('DELETE');
    request.flush(mock.articles[0]);
  });
});
