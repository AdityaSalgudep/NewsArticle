import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsArticleModel } from '../model/newsArticlesModel';
import { NewsModel } from '../model/newsModel';
import { NewsServiceService } from '../services/news-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p: number = 1;

  allNews: Array<NewsArticleModel> = [];
  constructor(private http: HttpClient, private newsService: NewsServiceService, private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    console.log(this.newsService.getStoredNews().length);

    if (this.newsService.getStoredNews().length == 0) {
      this.newsService.getNewNews('3').subscribe((data: NewsModel) => {
        console.log(data);
        this.allNews = data.articles;
        this.newsService.storeNews(this.allNews);
        this.spinner.hide();
      }
      );
    }
    else {
      this.allNews = this.newsService.getStoredNews();
      this.spinner.hide();
    }
  }
  changedArticle(id: any) {
    this.newsService.getNewNews(id).subscribe((data: NewsModel) => {
      console.log(data);
      this.allNews = data.articles;
      this.newsService.storeNews(this.allNews);
    }
    );
  }

}
