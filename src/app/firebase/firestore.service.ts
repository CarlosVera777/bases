import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: Firestore
  ) { 
    console.log("FirestoreService");
    // this.createDocumentDemo();
  }

  // CRUD: Create - Read - Update - Delete
  // QUERY
  async createDocumentDemo() {
    //1. Crear documento con Id especifico
    //const refDoc = doc(this.firestore, "cities/LA"); //1a.Nuevo
    const refDoc1 = doc(this.firestore, "cities1", "LA"); //1b.Reemplazar
    const data1: any = {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      Continent: "America"
    };
    // await setDoc(refDoc, data); //1a.Nuevo / 1b.Reemplazar
    await setDoc(refDoc1, data1, {merge: true}); //1c.Combinar

    //2. Crear documento con Id autogenerado
    const refCollection1 = collection(this.firestore, "cities2");
    const data2: any = {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      Continent: "America",
      date: serverTimestamp()
    }
    const refDoc2 = await addDoc(refCollection1, data2);
    console.log("Documento escrito con ID: ", refDoc2.id);
    
    //3. Crear documento desde ref. a documento a partir de ref. collection
    const refCollection2 = collection(this.firestore, "cities");
    const refDoc3 = doc(refCollection2);
    const data3: any = {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      id: refDoc3.id,
      date: serverTimestamp()
    };
    await setDoc(refDoc3, data3);
    console.log("CreateDocument");
  }

  async createDocument<tipo>(path: string, data: tipo){
    const refCollection = collection(this.firestore, path);
    const refDoc = doc(refCollection);
    const dataDoc: any = data;
    dataDoc.id = refDoc.id;
    dataDoc.date = serverTimestamp();

    return await setDoc(refDoc, dataDoc);
  }
} 
