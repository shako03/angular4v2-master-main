import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFuncService {

  constructor() { }
 
  printinConsole(name : string , obj : any){
    console.log(`${name} : ${obj}`);
  }

}



//single Tone ერთი სახე აქვს ერთხელ დაიბადება და მერე ბევრჯერ შეგვიძლია გამოვაცხადოთ