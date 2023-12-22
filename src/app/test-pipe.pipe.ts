import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(person: any, wish : string): any {
    if(person.gender=="M"){
      return `Hello Mr.${person.name} ${wish}`;
    } else{
      return `Hello Ms.${person.name} ${wish}`
    }
  }

}
