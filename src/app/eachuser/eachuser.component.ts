import { Component,OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eachuser',
  templateUrl: './eachuser.component.html',
  styleUrls: ['./eachuser.component.css']
})
export class EachuserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private sample:SampleService) {
  }

  currentUser : any;

  

  ngOnInit(): void{
    
    this.route.paramMap.subscribe(params=>{
      console.log(params)
      let userId = params.get('id');
      this.currentUser = this.sample.users.find(user => user.id==Number(userId));
    })
  }

}
