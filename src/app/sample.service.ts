import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  sampleArray:Array<string> = ["Iphone","samsung","one plus","vivo","Redmi"];

  name:string = "service"

  users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "image": "https://example.com/images/john.jpg",
      "address": "123 Main Street, Cityville"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "image": "https://example.com/images/jane.jpg",
      "address": "456 Oak Avenue, Townsville"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "image": "https://example.com/images/bob.jpg",
      "address": "789 Pine Lane, Villagetown"
    },
    {
      "id": 4,
      "name": "David Johnson",
      "email": "david.johnson@example.com",
      "image": "https://example.com/images/bob.jpg",
      "address": "789 Pine Lane, Villagetown"
    }
  ]

}
