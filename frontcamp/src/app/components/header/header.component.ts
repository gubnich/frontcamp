import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user = '';

  constructor(private newsService: NewsService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => {
        this.user = user ? user['name'] : null;
      }
    )
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
