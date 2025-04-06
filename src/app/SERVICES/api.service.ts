import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

    getAll(url : string) {
    return this.http.get('https://reqres.in/api/users')
  
    }
  
}

