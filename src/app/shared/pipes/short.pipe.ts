import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: false
})
export class ShortPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("args", args);
    let maxlength = + args[0];
    if(value.length > maxlength){
      return value.slice(0, maxlength);
    }
    return value;
  }
}
