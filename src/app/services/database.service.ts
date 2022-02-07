import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
  })
  export class databaseService {
    afa: any;
    constructor(private authfire: AngularFireAuth) { }
  
    login(user: User) {
      return this.afa.authfire.signInWithEmailAndPassword(user.email, user.password);
    }
  
    cadastro(user: User) {
      return this.afa.authfire.createUserWithEmailAndPassword(user.email, user.password);
    }
    getAuth() {
        return this.afa.authfire
      }

  }