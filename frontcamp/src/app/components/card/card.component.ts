import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('card', this.data)
  }

  delete( ){
    console.log('delete', this.data)
  }

  edit() {
    this.router.navigate(['edit'])
  }
}
