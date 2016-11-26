import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Http } from '@angular/http';
import { UserService } from './../../services/user.service';
import { Inject } from '@angular/core';
import { User } from './../../entity/user';


@Component({
	selector: 'users',
	template: `
	<h1>Usuarios</h1>
	<form>
		<label>Id</label>
		<input type="text" [(ngModel)]="id" name="id">

		<label>Login</label>
		<input type="text" [(ngModel)]="login" name="login">

		<label>password</label>
		<input type="text" [(ngModel)]="password" name="password">

		<button (click)=add()> CLICACACACA </button>
	</form>
	<ul>
		<li *ngFor= "let user of users | async">
			<h3>{{user.id}} aa</h3>
			<h3>{{user.login}}</h3>
			<h3>{{user.password}}</h3>
		</li>	
	</ul>
	`

})

export class UsersComponent implements OnInit{

	private users: User[] = [];
	private id;
	private login;
	private password;
	private newUser;
	private listUsers: Observable<User[]>;
	
	
		constructor(private UserService: UserService) {

		 
	}

	add(id, login, password){
		
		this.UserService.addUser(this.newUser);
  }

	delete(id: string){
		this.UserService.deleteUser(id)
		.subscribe(
			() => alert('Deletado!?'),
			console.error
		) // ESSE AQUI TA PEGANDO EM !!!!
	}


	ngOnInit() {
    	
	 this.UserService.getUsers()
			.subscribe(
            data => {this.users = data},
			error => alert(error),
			() => console.log("acabou para pf")
                        
             );
	}

}