import { Inject } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AngularFire, FirebaseRef, AngularFireDatabase  } from 'angularfire2';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { firebaseConfig } from './../../environments/firebase.config';
import { User } from './../entity/user';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
	
    

	constructor(private db: AngularFireDatabase, private http: Http, @Inject(FirebaseRef) fb) {}


    addUser(user: User): Observable<User>{
        
        const body = JSON.stringify({user: user});

        return this.http.post('https://healthy-application-2161e.firebaseio.com/Users/', body)
                    .map(response => response.json())
                    .catch(this.handleError);

    }


    getUsers(){
    return this.http.get(firebaseConfig.databaseURL +  '/Users.json')
                    .map( res => res.json());

  }

    deleteUser(id: string): Observable<any>{

        const url = firebaseConfig.databaseURL + '/Users/' + id + '.json';
        return this.http.delete(url);
        
    }


    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}