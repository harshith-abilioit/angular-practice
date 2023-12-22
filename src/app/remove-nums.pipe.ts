import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeNums'
})
export class RemoveNumsPipe implements PipeTransform {

  transform(value:string): any {
    if (!value) {
      return value;
    }

    // Remove numbers using a regular expression
    return value.replace(/[0-9]/g, '');
  }

}
