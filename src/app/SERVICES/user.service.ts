import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RegisterUser } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private api: ApiService) { }



  getAllUsers() {
    return this.api.getAll('https://reqres.in/api/users?page=1')
  }


  getAlProducts() {
    return this.api.getAll('https://fakestoreapi.com/products')
  }

  getUserById(id: number) {
    return this.api.getById('https://reqres.in/api/users', id)
  }

  postUser(user : RegisterUser){

    return this.http.postApi()
  }



}
