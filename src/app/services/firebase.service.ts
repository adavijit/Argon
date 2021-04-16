import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor( public firebaseAuth: AngularFireAuth) { }

  signin(email:string, password: string){

      return new Promise((resolve,reject)=>{
        this.firebaseAuth.signInWithEmailAndPassword(email,password)
        .then(res=> {
            this.isLoggedIn= true
            localStorage.setItem('user', JSON.stringify(res.user))
            resolve(true)
  
        }).catch(error=>{
          reject(error)
        })
      })

  }

  signup(email:string, password: string){

      return new Promise((resolve,reject)=>{
        this.firebaseAuth.createUserWithEmailAndPassword(email,password)
        .then(res=> {
            localStorage.setItem('user', JSON.stringify(res.user))
            resolve(true)
  
        }).catch(error=>{
          reject(error)
        })
      })


  }

  isAuthenticated(){
    if(localStorage.getItem('user')!== null){
      return true
    }else{
      return false
    }
  }
  logout(){

    return new Promise((resolve,reject)=>{
      this.firebaseAuth.signOut().then(res=>{
        localStorage.removeItem('user')
        this.isLoggedIn = false;
        resolve(true)
  
      }).catch(error=>{
        reject(error)
      })
    })
    

  }

}
