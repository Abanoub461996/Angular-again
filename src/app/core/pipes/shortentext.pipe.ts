import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortentext'
})
export class ShortentextPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if(value.length>length){
      return value.substring(0,length)+'...';
    }
    return value;
  }

}
