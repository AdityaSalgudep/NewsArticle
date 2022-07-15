import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsArticleModel } from '../model/newsArticlesModel';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newsId: number = 0;
  news: NewsArticleModel = { author: "", content: "", description: "", publishedAt: "", title: "", url: "", urlToImage: "" };
  constructor(private route: ActivatedRoute, private newsService: NewsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.newsId = +(params['id']);
      this.news = this.newsService.getNewsByID(this.newsId)
      if (this.news == null) {
        this.router.navigate(['/list']);
      }
      console.log(this.news);

    });



  }
  nextNews() {
    this.router.navigate(['list/details', ++this.newsId]);
  }
  prevNews() {
    this.router.navigate(['list/details', --this.newsId]);
  }
}
