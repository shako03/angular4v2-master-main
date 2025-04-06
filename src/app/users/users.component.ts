import { Component } from '@angular/core';
import { User } from '../Models/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../SERVICES/api.service';
import { UserService } from '../SERVICES/user.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private httpUsers : UserService){}

  ngOnInit(){
    this.httpUsers.getAllUsers().subscribe( (resp : any) =>{
      console.log(resp.data) 
      this.displayUser(resp.data)
    })
    this.httpUsers.getAlProducts().subscribe( (resp : any) =>{
      this.getProducts(resp)
    })
    this.httpUsers.getUserById(1).subscribe( (resp : any) =>{
      this.getUserById(resp)
    })

  }

  displayUser(arr : User[]){
    this.userArr = arr

  }

  getProducts(arr:any){
    console.log(arr)
  }

  getUserById(id : number){
    console.log(id)
  }




  userArr : User[] = []

}