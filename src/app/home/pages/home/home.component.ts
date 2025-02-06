import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { WebService } from 'src/app/services/web.service';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  articles: Models.Home.IArticle[];
  cargando: boolean = false;

  constructor( 
    private webService: WebService 
  ) { }

  ngOnInit() {
    this.getArticles();
    this.createArticle();
  }

  async getArticles() {
    this.cargando = true;
    const url = 'https://jsonplaceholder.typicode.com';
    const res = await this.webService.request<Models.Home.IArticle[]>('GET', url, 'posts');
    console.log("data->", res);
    if(res) {
      this.articles = res;
    }
    this.cargando = false;
  }

  async createArticle() {
    const url = 'https://jsonplaceholder.typicode.com';
    const data: Models.Home.IArticle = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const res2: Models.Home.IArticle = await this.webService.request<Models.Home.IArticle>('POST', url, 'posts', data);
    console.log("data post->", res2);
  }
}
