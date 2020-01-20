import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  public article = { title: 'New article'};

  constructor(private route: ActivatedRoute, private newsService: NewsService) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('id')) this.article = this.newsService.getArticle(params.get('id'))
      console.log(this.article)
    });
  }

  setArticleTitle(title) {
    this.article.title = title;
  }
}
