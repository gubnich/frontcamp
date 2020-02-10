import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CardComponent } from './card.component';
import { ButtonComponent } from '../button/button.component';
import { NewsService } from 'src/app/services/news/news.service';

class MockNewsService {
  public selectedArticle;

  deleteArticle() {
    return Promise.resolve();
  }

  setSelectedArticle(data) {
    data.selectedArticle = 'done';
  }

  getSelectedArticle() {
    return this.selectedArticle;
  }
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ CardComponent, ButtonComponent ],
      providers: [
        { provide: NewsService, useClass: MockNewsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = { };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign message property after delete-method call', fakeAsync(() => {
    component.delete();
    tick();
    expect(component.message).toEqual('deleted');
  }));

  it('should trigger setSelectedArticle-method', () => {
    component.onClick();
    expect(component.data.selectedArticle).toEqual('done');
  });
});
