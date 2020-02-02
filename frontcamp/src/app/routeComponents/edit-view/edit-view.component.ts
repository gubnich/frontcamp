import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  public title;
  public article = {};
  public saved = false;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.title = this.route.snapshot.url[0].path;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) this.article = this.newsService.getArticle(params.get('id'))
    });
  }

  submit(e) {
    this[this.title](e);
  }
  
  create(e) {
    console.log('submit', e)
    this.newsService.createArticle(e).then(
      () => this.saved = true
    )
  }
}
