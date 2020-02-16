import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

import { NewsServiceMock } from 'src/app/services/news/news.service.mock';
import { NewsService } from 'src/app/services/news/news.service';

import { EditViewComponent } from './edit-view.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FormComponent } from 'src/app/components/form/form.component';

describe('EditViewComponent', () => {
  let component: EditViewComponent;
  let fixture: ComponentFixture<EditViewComponent>;
  let newsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditViewComponent,
        ButtonComponent,
        FormComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { url: [{ path: "detail" }, { path: "local" }] } } },
        { provide: NewsService, useClass: NewsServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewComponent);
    component = fixture.componentInstance;
    newsService = fixture.debugElement.injector.get(NewsService);
    spyOn(newsService, 'createArticle').and.callThrough();
    spyOn(newsService, 'editArticle').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createArticle and change message property', fakeAsync(() => {
    component.create({});
    expect(newsService.createArticle).toHaveBeenCalled();
    tick();
    expect(component.message).toBe('Saved!');
  }));

  it('should call editArticle and change message property', fakeAsync(() => {
    component.edit({});
    expect(newsService.editArticle).toHaveBeenCalled();
    tick();
    expect(component.message).toBe('Changes saved!')
  }));
});
