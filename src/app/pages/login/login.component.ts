import { Component, OnInit } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	constructor(public firebaseService: FirebaseService, private router: Router){}

		  ngOnInit(){

		  if(localStorage.getItem('user') !== null){
			  console.log("!@3123");
			  
			this.router.navigate(['/dashboard']);
		  }
		  }


		  onSignin(email:string, password:string)
		  {
		  		this.firebaseService.signin(email,password).then(res=>{
					  console.log(res);
					  
					this.router.navigate(['/dashboard']);
				}).catch(error=>{
					alert("Error!!! "+error)
				})
		  }
		}
