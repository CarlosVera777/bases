import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {
  title: string = "Contact";
  description: string = `Lorem autogenerado de prueba de contacto
                         Lorem autogenerado de prueba de contacto
                         Lorem autogenerado de prueba de contacto
                         Lorem autogenerado de prueba de contacto
                         `;

  constructor() { }

  ngOnInit() {}

}
