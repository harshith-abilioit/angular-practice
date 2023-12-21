import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  // string interpolation
  num = 10;
  name() {
    return this.num
  };
  path:string = '../../assets/MicrosoftTeams-image.png';
  date:string = new Date().toLocaleTimeString();

  timerId = setInterval(()=>{
    this.date = new Date().toLocaleTimeString();
  },1000)


  count:number = 0;

  increment(){
    return this.count+=1
  }
  decrement(){
    return this.count-=1
  }

  myName:string = "Harshith";

  changeName(e:any){
    this.myName = e.target.value
  }

  role:string = 'software intern';

  updateJob(){
    this.role = "Software Engineer"
  }

  showPtag:boolean = true;
  changeShow(){
    this.showPtag = !this.showPtag
  }

  ngforArray:Array<number> = [1,2,3];

  moviesArray:Array<string> = [];

  timeId = setTimeout(()=>{
    this.moviesArray = ["Salaar","Adipurush","Radheshyam"]
  },3000)

  alphabets:Array<string> = ['a','b','c','d','e'];


  num1:number = 10;
  num2:number = 5;

  operation:string = "+";

  personDetails:object = {id:1,name:"Harshith",role:"intern"}
  
  dob:Date = new Date()

}
