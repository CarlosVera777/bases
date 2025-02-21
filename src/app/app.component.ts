import { Models } from 'src/app/models/models';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FirestoreService } from './firebase/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private firestoreService: FirestoreService
  ) {
    this.saveproduct();
  }

  async saveproduct(){
    console.log("saveDoc()");
    const data: Models.Store.IItem = {
      name: "HotDog",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime
                    asperiores ex quia, nostrum laboriosam recusandae ea eaque explicabo 
                    cupiditate iure quo omnis aliquid beatae soluta odit aliquam. Velit, voluptate.`,
      price: 5,
      image: "https://url....",
      stock: 10
    }

    try{
      await this.firestoreService.createDocument<Models.Store.IItem>("Products", data);
      console.log("Guardado con Exito!!");
    }catch(error){
      console.log("Error al guardar");
    }
  }
}
