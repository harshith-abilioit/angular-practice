import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template : `<h1>hello</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home'
  data:Array<Number>=[1,2,3,4];
}
