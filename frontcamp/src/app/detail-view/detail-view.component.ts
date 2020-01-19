import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  public routeId;
  constructor(private route: ActivatedRoute) {
    // this.routeId = params.get("id");
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.products.forEach((p: Product) => {
      //   if (p.id == params.id) {
      //     this.product = p;
      //   }
      // });
      console.log(params)
    });
  }

}
