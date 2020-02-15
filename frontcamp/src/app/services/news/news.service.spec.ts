import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

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

});
