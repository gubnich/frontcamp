import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

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
  constructor(private newsService: NewsService) { }
  public message = '';

  ngOnInit() { }

  delete( ){
    this.newsService.deleteArticle(this.data['id']).then(
      res => this.message = 'deleted'
    )
  }

  onClick() {
    this.newsService.setSelectedArticle(this.data);
  }

}
