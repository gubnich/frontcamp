import { BehaviorSubject } from 'rxjs';

export class UserServiceMock {
  private user$ = new BehaviorSubject(null);

  constructor() { }

  getUser() {
    return this.user$;
  }

  login() {
    this.user$.next({ name: 'User Login' });
  }

  logout() {
    this.user$.next(null);
  }
}
