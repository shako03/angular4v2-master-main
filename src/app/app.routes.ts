import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';


export const routes: Routes = [

      //Eagle Loading




      {path: "", redirectTo: "home", pathMatch: "full"},
      {
          path: "Home",
          loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      },
      {
          path: "Main",
          loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
      },
      {
          path: "Details/:id",
          loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
      },
      { 
          path: "users",
          loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
      },
  
  
  
      {path: "**", component: Error404Component}


];
