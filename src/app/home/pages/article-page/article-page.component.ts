import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Models } from 'src/app/models/models';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-article-page',
  standalone: false,
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent  implements OnInit {
  article: Models.Home.IArticle

  constructor(
    private webService: WebService,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params: any) => {
      if(params.id){
        console.log('params.id ->', params.id);
        this.loadArticle(params.id);
      }
    });
    this.route.queryParams.subscribe((queryParams:any) => {
      console.log("QueryParams->", queryParams);
      
      if(queryParams.id){
        this.loadArticle(queryParams.id);
      }
    });
  }
  
  ngOnInit() {}

  async loadArticle(id: string){
    const url = 'https://jsonplaceholder.typicode.com';
    const path = 'posts/' + id;
    const res = await this.webService.request<Models.Home.IArticle>('GET', url, path);
    console.log(path);
    
    if(res){
      this.article = res;
      console.log("this.article-> ", this.article);
    }
  }
}
