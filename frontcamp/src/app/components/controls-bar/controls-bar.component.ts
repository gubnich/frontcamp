import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../services/news/news.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-controls-bar',
  templateUrl: './controls-bar.component.html',
  styleUrls: ['./controls-bar.component.css']
})
export class ControlsBarComponent implements OnInit {
  @Input() sources;
  @Output() showLocal = new EventEmitter;
  public isLogged = false;

  constructor(public newsService: NewsService, private userService: UserService, private router: Router) { }

  ngOnInit() { 
    this.userService.getUser().subscribe(
      user => {
        console.log('////////////', user)
        this.isLogged = user ? true : false;
      }
    )
  }

  add() {
    this.router.navigate(['add'])
  }

  onCheckboxChange($event) {
    this.showLocal.emit($event.target.checked);
  }
}
