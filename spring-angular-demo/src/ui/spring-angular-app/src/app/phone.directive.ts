import { Directive ,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phone-num]'
})
export class PhoneDirective {
  private element: HTMLInputElement;
  @HostListener('input') onMouseEnter() {
    this.element.value = this.element.value.replace(/[(a-zA-z),-]/g,'');
    if(this.element.value.length>10){
      this.element.value = this.element.value.substring(0,1)+"-"+this.element.value.substring(1,4)+"-"+this.element.value.substring(4,7)+"-"+this.element.value.substring(7,11);
    }
    else if(this.element.value.length>6){
      this.element.value = this.element.value.substring(0,3)+"-"+this.element.value.substring(3,6)+"-"+this.element.value.substring(6,10);
    }else if(this.element.value.length>3){
      this.element.value = this.element.value.substring(0,3)+"-"+this.element.value.substring(3,6);
    }
  }
  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

}
