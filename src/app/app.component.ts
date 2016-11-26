import { Component } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';



@Component({
  selector: 'app-root',
  styleUrls: ['./css/style.css'],
  template: `<nav class="navbar navbar-default">
		<div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" routerLink="/users">
	        <p class="navbar-text">Healthy Service</p>
	      </a>
	    </div>
	    
	  
	</div>	
</nav>
<router-outlet></router-outlet>
`

})
export class AppComponent {
  
  

}
