import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Test } from '../interfaces/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private firestore = inject(Firestore)
  testCollection = collection(this.firestore, "test")

  constructor() { }

  getAllTest(): Observable<Test[]> {
    return collectionData(this.testCollection, { idField: 'id' }) as Observable<Test[]>
  }

  addTest(name:string):Observable<string>{
    const newTest={name}
    const promise= addDoc(this.testCollection,newTest).then((respone)=>{
      return respone.id
    })
    return from (promise);
  }

  updateTest(id:string,updatedTest:Test):Observable<void>{
    const docRef= doc(this.firestore,'test'+ id)
    const promise= setDoc(docRef,updatedTest)
    return from(promise)
  }

  deleteTest(id:string):Observable<void>{
    const docRef= doc(this.firestore,'test'+ id)
    const promise= deleteDoc(docRef)
    return from(promise)
  }
}
