import { Component } from '@angular/core';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private sample:SampleService){}

  users = this.sample.users
}
