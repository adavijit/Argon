import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


	constructor(public firebaseService: FirebaseService,private router: Router){}

		  ngOnInit()
		  {

			// if(localStorage.getItem('user') !== null){
			// 	this.router.navigate(['/dashboard']);
			// }
		  }

		onSignup(email:string, password:string)
		{
		  		this.firebaseService.signup(email,password).then(res=>{
					if(res){
					 alert("Successfully registered!!!")
					}else{
						alert("Something error!!!")
					}
				})
		  		// if(this.firebaseService.isLoggedIn)
		  		// this.isSignedIn=true
		}
		}