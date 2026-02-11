import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: unknown, position: unknown): unknown {
   if(typeof value==='string' && typeof position==='number' ){
      if(position && position>=0 && position<value.length){
         return value.charAt(position);
      }else {
        return value.charAt(0);
      }
   }
    return null;
  }

}
