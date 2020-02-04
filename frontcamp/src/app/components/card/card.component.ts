import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() type;
  public message = '';

  constructor(private newsService: NewsService) { }

  ngOnInit() { }

  delete() {
    this.newsService.deleteArticle(this.data['id']).then(
      res => this.message = 'deleted'
    )
  }

  onClick() {
    this.newsService.setSelectedArticle(this.data);
  }

}
