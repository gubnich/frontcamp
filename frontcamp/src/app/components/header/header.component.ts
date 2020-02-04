import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private sources;
  public user = '';

  constructor(private newsService: NewsService, private userService: UserService) { }

  ngOnInit() {
    this.getSources();
    this.userService.getUser().subscribe(
      user => {
        console.log('////////////', user)
        this.user = user ? user['name'] : null;
      }
    )
  }

  getSources() {
    this.sources = this.newsService.getSources();
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
