import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

    getAll(url : string) {
    return this.http.get(url)
    }

    
    getById(url : string , id : number){
      return this.http.get(`${url}/${id}`)
    }
  
    postApi(url : string , obj : any){
    
      return this.http.post(url, obj)
  
    }


}

