import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from 'src/app/services/user/user.service';
import { UserServiceMock } from 'src/app/services/user/user.service.mock';

import { HeaderComponent } from './header.component';
import { LogoComponent } from '../logo/logo.component';
import { ButtonComponent } from '../button/button.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LogoComponent,
        ButtonComponent,
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
      ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    spyOn(userService, 'login').and.callThrough();
    spyOn(userService, 'logout').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user', () => {
    const user = { name: 'User Login' };
    userService.user$.next(user);
    expect(component.user).toBe(user.name);
  });

  it('should should set user as null', () => {
    userService.user$.next(null);
    expect(component.user).toBe(null);
  });

  it('should call login', () => {
    component.login();
    expect(userService.login).toHaveBeenCalled();
  });

  it('should call logout', () => {
    component.logout();
    expect(userService.logout).toHaveBeenCalled();
  });
});
