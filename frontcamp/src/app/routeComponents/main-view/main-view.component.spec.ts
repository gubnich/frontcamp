import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsService } from 'src/app/services/news/news.service';
import { NewsServiceMock } from 'src/app/services/news/news.service.mock'
import { mock } from 'src/app/services/news/mock';

import { MainViewComponent } from './main-view.component';
import { ControlsBarComponent } from 'src/app/components/controls-bar/controls-bar.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let newsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainViewComponent,
        ControlsBarComponent,
        ButtonComponent,
        SelectComponent,
        FilterComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        FilterPipe,
        { provide: NewsService, useClass: NewsServiceMock },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    newsService = fixture.debugElement.injector.get(NewsService);
    component.newsContainer = {
      clear: () => { }
    }
    component.createComponent = () => { }
    fixture.detectChanges();
  });
  
  it('should create', () => {
    spyOn(component.newsContainer, 'clear').and.callThrough();
    expect(component).toBeTruthy();
    expect(component.page).toBe(1);
    newsService.setSelectedSource(mock.sources[2]);
    expect(component.selectedSource.id).toBe(mock.sources[2].id);
    newsService.setFilterValue('value')
    expect(component.newsContainer.clear).toHaveBeenCalled();
  });
  
  it('should create', fakeAsync(() => {
    spyOn(component.newsContainer, 'clear').and.callThrough();
    newsService.setFilterValue('value');
    tick();
    expect(component.newsContainer.clear).toHaveBeenCalled();
  }));

  it('should instantiate sources list', fakeAsync(() => {
    component.getSources();
    let expected;
    component.sources$.toPromise().then(res => expected = res)
    tick();
    expect(expected[0].id).toEqual(mock.sources[0].id);
  }));

  it('should instantiate articles list', fakeAsync(() => {
    component.getArticles('sourceId');
    tick();
    expect(component.articles[0].title).toEqual(mock.articles[0].title);
  }));

  it('should get local articles and call createComponent', fakeAsync(() => {
    component.getLocalArticles();
    spyOn(component, 'createComponent').and.callThrough();
    tick();
    expect(component.createComponent).toHaveBeenCalledTimes(mock.articles.length);
  }));

  it('should call newsContainer.clear', fakeAsync(() => {
    spyOn(component.newsContainer, 'clear').and.callThrough();
    component.setShowLocalOnly(true);
    expect(component.newsContainer.clear).toHaveBeenCalled();
  }));

  it('should get local articles and call createComponent', () => {
    component.articles = ['article'];
    spyOn(component, 'createComponent').and.callThrough();
    component.setShowLocalOnly(false);
    expect(component.createComponent).toHaveBeenCalled();
  });

  it('should get articles and call createComponent', fakeAsync(() => {
    component.loadMore();
    spyOn(component, 'createComponent').and.callThrough();
    tick();
    expect(component.createComponent).toHaveBeenCalledTimes(mock.articles.length);
  }));
});
