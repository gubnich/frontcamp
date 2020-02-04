import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { UserService } from '../services/user/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Guard implements CanActivate{
  
  constructor(private userService: UserService) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         console.log(!!this.userService.getUser().getValue())
        return !!this.userService.getUser().getValue();
    }
}
