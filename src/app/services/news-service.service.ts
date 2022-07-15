import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../config';
import { NewsArticleModel } from '../model/newsArticlesModel';
import { NewsModel } from '../model/newsModel';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  url = '';
  storedNewsInservice: Array<NewsArticleModel> = [];

  constructor(private http: HttpClient) { }
  storeNews(news: NewsArticleModel[]) {
    this.storedNewsInservice = news.slice(0);
  }
  getNewsByID(id: number) {
    return this.storedNewsInservice[id];
  }
  getStoredNews() {
    return this.storedNewsInservice;
  }
  getNewNews(id: any) {
    if (id == '1')
      this.url = config.APPLE_ARTICLE_URL + '&apiKey=' + config.API_KEY;
    else if (id == '2')
      this.url = config.TESLA_ARTICLE_URL + '&apiKey=' + config.API_KEY;
    else if (id == '3')
      this.url = config.BUSINESS_ARTICLE_URL + '&apiKey=' + config.API_KEY;
    else if (id == '4')
      this.url = config.TECHCRUNCH_ARTICLE_URL + '&apiKey=' + config.API_KEY;

    return this.http.get<NewsModel>(this.url)
  }
}
