import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MainViewComponent } from './main-view.component';
import { ControlsBarComponent } from 'src/app/components/controls-bar/controls-bar.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

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
        FilterPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instantiate sources list', fakeAsync(() => {
    fixture.detectChanges();
    component.getSources();
    // tick();
    fixture.detectChanges();
    component.sources$.toPromise().then((res) => console.log(res))
    // console.log(component.sources$)
    expect(component).toBeTruthy();
  }));
});
