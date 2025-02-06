import { Component, Input, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  @Input() article: Models.Home.IArticle;
  
  constructor() { 
    // this.loadArticulo();
  }

  ngOnInit() {}

  loadArticulo() {
  //   const data: any = {
  //     title: 'Angular [DINAMICO]',
  //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' +
  //     'Quae rem maxime ullam enim eveniet magni, sed quo reprehenderit' +
  //      'perspiciatis assumenda!',
  //     image: {
  //       url: '/assets/images/angular-logo.png',
  //       desc: 'logo de angular'
  //     } 
  //   }
  //   this.article = data;
  }
}
