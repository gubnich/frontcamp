import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public article = { title: ''};

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.article = this.newsService.getArticle(params.get('id'))
      console.log(this.article)
    });
  }

  delete( ){
    console.log('delete', this.article)
  }

  edit() {
    this.router.navigate([`edit/${this.article.title}`])
  }
}
