import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent implements OnInit {
  @Input() sources;
  @Output() showLocal = new EventEmitter;
  public isLogged = false;

  constructor(private userService: UserService, private newsService: NewsService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => {
        this.isLogged = user ? true : false;
      }
    )
  }

  onCheckboxChange($event) {
    this.showLocal.emit($event.target.checked);
  }
}
