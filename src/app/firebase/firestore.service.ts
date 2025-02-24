import { Injectable } from '@angular/core';
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDocs, increment, 
         serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: Firestore,
  ) { 
    console.log("FirestoreService");
    //this.createDocumentDemo();
  }

  // CRUD: Create - Read - Update - Delete
  // QUERY

  //---| CREATE |---//
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

  //---| UPDATE |---//
  async updateDocumentDemo() {
    const refDoc1a = doc(this.firestore, "cities/LA");
    // const refDoc1b = doc(this.firestore, "cities", "LA");
    const data: any = {
      //name: "Los Angeles",
      //state: "CA",
      country: "USA",
      updateAt: serverTimestamp()
    }
    await updateDoc(refDoc1a, data);

    //1. Actualiza los campos en objetos anidados
    // {
    //   name: "Frank",
    //   favorities: { food: "Pizza", color: "blue", subject: "recess" },
    //   age: 12
    // }
    const data1: any = {
      "favorities.color": "red"
    }

    //2.Actualizar elementos de un Array
    const data2: any = {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      // regions: ["region1", "region2"]
      // regions: arrayUnion("regionNuevaX"), //Add
      regions: arrayRemove("regionExistente") //remove
    }

    //3.Incrementar un valor numerico
    const data3: any = {
      populations: increment(50)  //Incrementar
    }

    // await updateDoc(refDoc1a, data1);
  }
  async updateDocument<tipo>(path: string, data: any) {
    const refDoc = doc(this.firestore, path);
    data.updateAt = serverTimestamp();
    
    return await updateDoc(refDoc, data);
  }

  //---| DELETE |---//
  async deleteDocumentDemo() {
    const refDoc = doc(this.firestore, "");
    await deleteDoc(refDoc);
  }

  async deleteDocument(path: string) {
    const refDoc = doc(this.firestore, path);
    return await deleteDoc(refDoc);
  }

  //
  async deleteDocumentAndSubcollections(parentPath: string, subcollectionName: string) {
    try {
      const subcollectionRef = collection(this.firestore, `${parentPath}/${subcollectionName}`);

      // 1. Obtener y eliminar todos los documentos de la subcolección
      const subcollectionSnapshot = await getDocs(subcollectionRef);
      if (!subcollectionSnapshot.empty) {
        const deletePromises = subcollectionSnapshot.docs.map(docSnap => deleteDoc(docSnap.ref));
        await Promise.all(deletePromises);
        console.log(`Subcolección '${parentPath}/${subcollectionName}' eliminada.`);
      }

      // 2. Eliminar el documento padre
      const parentDocRef = doc(this.firestore, parentPath);
      await deleteDoc(parentDocRef);
      console.log(`Documento '${parentPath}' eliminado.`);
    } catch (error) {
      console.error("Error al eliminar documento y subcolecciones:", error);
    }
  }
} 
