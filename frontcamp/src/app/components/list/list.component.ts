import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log('list', this.data[0])
  }

}
