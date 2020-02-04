import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$ = new BehaviorSubject(null);

  constructor() { }

  getUser() {
    return this.user$;
  }

  login() {
    this.user$.next({ name: 'User Login'});
  }

  logout() {
    this.user$.next(null);
  }
}
