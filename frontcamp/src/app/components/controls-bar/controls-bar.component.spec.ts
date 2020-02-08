import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ControlsBarComponent } from './controls-bar.component';
import { FilterComponent } from '../filter/filter.component';
import { ButtonComponent } from '../button/button.component';
import { SelectComponent } from '../select/select.component';

describe('ControlsBarComponent', () => {
  let component: ControlsBarComponent;
  let fixture: ComponentFixture<ControlsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        ControlsBarComponent,
        ButtonComponent,
        SelectComponent,
        FilterComponent
      ],
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsBarComponent);
    component = fixture.componentInstance;
    component.sources = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
