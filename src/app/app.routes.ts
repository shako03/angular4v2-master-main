import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';


export const routes: Routes = [

      //Eagle Loading




      { path: "", redirectTo: "main", pathMatch: "full" },

      {path:"Main", component:MainComponent},  
      {path:"Home", component:HomeComponent},
      {path:"Details/:id", component:DetailsComponent},
      {path:"users", component:UsersComponent },

      { path: "**", component: Error404Component }


];
