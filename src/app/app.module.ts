import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './pages/users/user.component';
import { firebaseConfig } from '../environments/firebase.config';

@NgModule({
  declarations: [
    AppComponent, UsersComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
          {
            path: 'users',
            component: UsersComponent
          },
          {
            path: '',
            redirectTo: '/users',
            pathMatch: 'full'
          }
        ])

  ],
 
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
