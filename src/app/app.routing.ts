import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './auth.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 

  {
  path:'dashboard',
  component: AdminLayoutComponent,
      children: [
      {
        path: '',
        component: DashboardComponent
      }],
  canActivate:[AuthGuard]
  },
  
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //     }
  //   ]
  // },
   {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
