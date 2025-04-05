import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { User } from '../Models/user';
import { CommonFuncService } from '../SERVICES/common-func.service';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent  {




constructor(private Route : ActivatedRoute , private commonFunction : CommonFuncService){                                                    //ეს ინახავს იმ როუტს რომელიც ამ გვერდის ჩატვირთვისას არის და ვინახავთ Route ცვლადში
  this.Route.params.subscribe(data => this.getSingleUser(data['id']))                                 //subscribe-ჩასაფრება როგორცვე ეს რამეს მიიღებს საბსქრაიბით ვიჭერთ არის then ის მსგავსი
}



userArr: User[] = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
] 



ngOnInit(){                                                                                     //როდესაც გამოცხადდება რამე კომპონენტი თუ მინდა რომ მასზე რამე გავაკეთო მაშინ უნდა აღვწერო აქ თუ რა გააკეთოს
console.log("hello from details component")
console.log(this.Route.snapshot.queryParamMap.get("id"))
}


singleUser : User = new User(); 

getSingleUser(id : number){

this.singleUser = this.userArr.find((user) => user.id == id)!; 

this.commonFunction.printinConsole("singleUser", JSON.stringify(this.singleUser))
}







}











//life cycle hook //ეს არის კომპონენტის სიცოცხლის წრე

// fetch        promise           then
// params      observable       subscribe


//params არის observable ტიპი ანუ თუ არ დავუსაბსქრაიბდებით ის არ იმუშავებს
