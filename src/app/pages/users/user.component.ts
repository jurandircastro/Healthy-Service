import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from './../../services/user.service';

import { User } from './../../entity/user';


@Component({
	selector: 'users',
	templateUrl: './user.component.html',	 

})

export class UsersComponent implements OnInit{

	newUser: User;
	users: FirebaseListObservable<User[]>;


	constructor(private af: AngularFire, private userService: UserService){
		this.initUser();

		this.users = userService.getUsers()
	}

	initUser() {
        this.newUser = new User();
    }


	pushUser(){

		this.userService.addUser(this.newUser);
    	alert("usuario " + this.newUser.login + " cadastrado");

		this.initUser();
  	}
	
	getUsers() {	
			this.userService
			.getUsers() 
			this.users = this.af.database.list('/Users');
	}

	deleteUser(key: string){
		this.userService.deleteUser(key)
			alert('Deletado!')			
	}


	ngOnInit(){
		this.getUsers();
	}

}