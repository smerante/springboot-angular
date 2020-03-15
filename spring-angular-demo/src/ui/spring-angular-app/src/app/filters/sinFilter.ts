import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sinFilter'})
export class sin implements PipeTransform {
  transform(value: string): string {
    value = value.replace(/[(a-zA-z),-]/g,'');
    return value.substring(0,3)+"-***-"+value.substring(6,9);
  }
}