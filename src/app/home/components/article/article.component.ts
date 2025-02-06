import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  @Input() article: Models.Home.IArticle;
  
  constructor(
    private router: Router
  ) { 
    console.log("Constructor() ArticleComponent");
    
  }

  ngOnInit() {
    console.log("ngOnInit() ArticleComponent");  
  }

  ngOnDestroy() {
    console.log("ngOnDestroy() ArticleComponent");
  }

  ngOnChanges() {
    console.log("ngOnChanges() ArticleComponent");
  }

  gotoArticle() {
    this.router.navigate([`/home/article`], { queryParams: { id: this.article.id, b: "Hola mundo" } });
    // this.router.navigate([`/home/article/${this.article.id}`])
  }
}
