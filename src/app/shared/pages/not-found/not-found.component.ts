import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [
    IonContent,
    RouterModule
   ]
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
