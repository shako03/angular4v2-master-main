import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFuncService {

  constructor() { }
 
  print(){
    console.log("Hello From CommonFuncService");
  }

}



//single Tone ერთი სახე აქვს ერთხელ დაიბადება და მერე ბევრჯერ შეგვიძლია გამოვაცხადოთ