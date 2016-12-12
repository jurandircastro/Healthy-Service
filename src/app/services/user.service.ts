import { Inject } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AngularFire, FirebaseRef, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { firebaseConfig } from './../../environments/firebase.config';
import { User } from './../entity/user';


@Injectable()
export class UserService{
	  
    users: FirebaseListObservable<User[]>;

	constructor(private angularFire: AngularFire, private http: Http) { 
    this.users = this.angularFire.database.list('/Users', {
      query: {
        orderByChild: 'id',
      }
    });
  }

    addUser(user: User){
        
        this.users.push(user);

    }

    getUsers(){
        
    return this.users = this.angularFire.database.list('/Users', {
      query: {
        orderByChild: 'id',
      }
    });
        
    }

    deleteUser(key: string){

        this.users.remove(key);
        
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}