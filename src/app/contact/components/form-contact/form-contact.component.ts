import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-form-contact',
  standalone: false,
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent  implements OnInit {
  form: Models.Contact.IFormContact = {
    email: "",
    name: "",
    phone: ""
  }
  error: string = "";

  constructor() { }

  ngOnInit() {}

  enviar(){
    if(!this.form.email){
      this.error = "ingrese su email";
      return;
    }
    this.error = "";
      
    console.log("Enviar ->", this.form);
  }
}
