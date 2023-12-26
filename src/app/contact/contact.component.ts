import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getData()
 }

//  isLoading:boolean = true

 postsArray:any=[];


  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      data => {
        console.log(data)
        this.postsArray=data;
        // this.isLoading=false
      }
    )
  }

  

}
