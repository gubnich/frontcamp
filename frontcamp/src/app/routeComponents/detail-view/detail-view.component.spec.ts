import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from 'src/app/services/news/news.service';
import { NewsServiceMock } from 'src/app/services/news/news.service.mock';

import { DetailViewComponent } from './detail-view.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SelectComponent } from 'src/app/components/select/select.component';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;
  let newsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailViewComponent,
        ButtonComponent,
        SelectComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: "detail" }, { path: "world" }] } } },
        { provide: NewsService, useClass: NewsServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    newsService = fixture.debugElement.injector.get(NewsService);
    spyOn(newsService, 'deleteArticle').and.callThrough();
    component.article = {};
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call deleteArticle and change message property', fakeAsync(() => {
    component.delete();
    expect(newsService.deleteArticle).toHaveBeenCalled();
    tick();
    expect(component.message).toBe('deleted');
  }));
});
