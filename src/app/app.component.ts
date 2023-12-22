import { Component,ViewChild } from '@angular/core';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-root',
  // template : `<h1>hello</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData = 'Hello from parent!';
  collegues:Array<string> = ["harshith","mahesh","ahmed","Jeshwanth"];
  parentToChild = "data from parent to child";

  @ViewChild(WorkComponent) work:any

  fromChild:string = ''

  call(){
    this.fromChild = this.work.viewChildData
  }
}
