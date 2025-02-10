import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  imports: [NgIf, NgClass, NgFor]
})
export class DemoComponent  implements OnInit {
  list: number[] = [1,2,3];

  constructor() { }

  ngOnInit() { }

}
