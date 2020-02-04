import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public article = {};
  public isLocal;
  public message = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {
    this.isLocal = this.route.snapshot.url[1].path === 'local';
  }

  ngOnInit() {
    this.article = this.newsService.getArticle()
  }

  delete() {
    this.newsService.deleteArticle(this.article['id']).then(
      res => this.message = 'deleted'
    )
  }

  edit() {
    this.router.navigate([`edit/${this.article['title']}`])
  }
}
