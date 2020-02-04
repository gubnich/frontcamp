import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from '../services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Guard implements CanActivate {

  constructor(private userService: UserService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const res = !!this.userService.getUser().getValue();
    if(!res) alert('You are not logged in')
    return res;
  }
}
