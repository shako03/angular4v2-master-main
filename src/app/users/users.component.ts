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
  constructor(private httpUsers: UserService) { }

  ngOnInit() {
    // this.httpUsers.getAllUsers().subscribe((response: any) => {
    //   this.renderUser(response.data)
    // })

    this.httpUsers.getAllProducts().subscribe((response: any) => {
      this.getProducts(response.data)
      console.log(response.data)
    })
  



    
  }






  getProducts(arr: any) {
    console.log(arr)
  }





}