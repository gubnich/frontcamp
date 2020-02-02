import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data = {
    urlToImage: 'https://via.placeholder.com/700x394.png?text=News+aggregator'
  };
  @Input() type;
  constructor() { }

  ngOnInit() { }

  delete() {
    console.log('delete', this.data)
  }

}
