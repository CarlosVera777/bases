import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  article: Models.Home.IArticulo;
  
  constructor() { 
    setTimeout(() => {
      this.loadArticulo();
    }, 2000);
  }

  ngOnInit() {}

  loadArticulo() {
    const data: Models.Home.IArticulo = {
      title: 'Angular [DINAMICO]',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' +
      'Quae rem maxime ullam enim eveniet magni, sed quo reprehenderit' +
       'perspiciatis assumenda!',
      image: {
        url: '/assets/images/angular-logo.png',
        desc: 'logo de angular'
      } 
    }
    this.article = data;
  }
}
