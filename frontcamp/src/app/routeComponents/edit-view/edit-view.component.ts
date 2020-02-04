import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditViewComponent implements OnInit {
  public title;
  public article = {};
  public message = '';

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.title = this.route.snapshot.url[0].path;
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
      this.article = this.newsService.getArticle()
    // });
  }

  submit(e) {
    this[this.title](e);
  }
  
  create(e) {
    console.log('submit', e)
    this.newsService.createArticle(e).then(
      () => this.message = 'Saved!'
    )
  }

  edit(e) {
    console.log('submit', e)
    this.newsService.editArticle(e).then(
      () => this.message = 'Changes saved!'
    )
  }
}
