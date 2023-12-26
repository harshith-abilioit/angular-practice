import { Component } from '@angular/core';
import { SampleService } from '../sample.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private samp:SampleService) {}

  sampleArrays = this.samp.sampleArray

  name:string = this.samp.name

  myObs = new Observable(listener=>{
    listener.next("one")
    listener.next("two")
    listener.next("three")
    setTimeout(() => listener.next('four'), 1000);
    setTimeout(() => {
      listener.next('five');
      listener.complete();
    }, 2000);
  })

  test(){
    this.myObs.subscribe(
      data => {console.log(data)},
      error => {console.log(error + "error")},
      ()=>{console.log('completed')}
    )
  }


}
