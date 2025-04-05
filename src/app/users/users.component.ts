import { Component } from '@angular/core';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../SERVICES/api.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
constructor(private  httpUsers :ApiService ) { }

ngOnInit(){
    this.httpUsers.getAllUsers().subscribe((response : any ) => {
      this.userArr = response.data;
      this.renderUser(response.data)
    })
}

renderUser(arr : User[]){
this.userArr = arr
}

userArr : User[] = []

}