import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginFireauth(value: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public auth : AngularFireAuth) { }

   loginfireauth(value){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.login().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
   }
   }

