import { Injectable ,OnInit} from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  isSignedIn= true;
  isLoggedIn = false;
 constructor(public firebaseService: FirebaseService, private router: Router, public firebaseAuth: AngularFireAuth){

 }


 canActivate():boolean{

 if(this.firebaseService.isAuthenticated()){
   return true
 }
 else{
 return false
 }
 }
}
