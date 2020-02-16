import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set user', () => {
    let expected;
    service.getUser().subscribe( user => expected = user)
    service.login();
    expect(expected.name).toBe('User Login');
  });

  it('should set user as null', () => {
    let expected;
    service.getUser().subscribe( user => expected = user)
    service.logout();
    expect(expected).toBe(null);
  });
});
