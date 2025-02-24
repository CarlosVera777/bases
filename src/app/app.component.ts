import { Models } from 'src/app/models/models';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FirestoreService } from './firebase/firestore.service';
import { deleteField, increment } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(
    private firestoreService: FirestoreService
  ) {
    this.deleteProduct();
    //this.deleteProduct_Document_And_SubCollections();
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
  async updateProduct() {
    console.log("UpdateProduct()");
    // const path = "Products" + "/" + "id";
    //const path = "Products/4HfxSTHnhuwrI4r8CZkd";
    const path = "Products/4HfxSTHnhuwrI4r8CZkd";
    const updateDoc = {
      stock: increment(10),
      price: deleteField() //Borrar campo
    }
    
    try{
      await this.firestoreService.updateDocument(path, updateDoc);
      console.log("Actualizado con Exito!");
    }catch(error){
      console.log("Error al actualizar");
    }
  }
  async deleteProduct() {
    console.log("DeleteCitie()");
    const path = "cities2/RRDQTLTGM7x4QIJQIkyn"; // BorrarDocumento
    try{
      await this.firestoreService.deleteDocument(path);
      console.log("Eliminado con Exito!");
    }catch(error){
      console.log("Error al eliminar");
    }
  }
  async deleteProduct_Document_And_SubCollections() {
    console.log("DeleteCity()");
    try{
      const path: string = "cities2/OjaRaDXEoVyEYYtHzPwo";
      const subcollection = "items";
      await this.firestoreService.deleteDocumentAndSubcollections(path, subcollection);
      console.log("Collection y SubCollections Eliminado con Exito!");
    }catch(error){
      console.log("Error al eliminar");
    }
  }
}
