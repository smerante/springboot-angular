import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sin]'
})
export class SinDirective {
  private element: HTMLInputElement;
  @HostListener('input') onMouseEnter() {
    this.element.value = this.element.value.replace(/[(a-zA-z),-]/g,'');
    if(this.element.value.length>6){
      this.element.value = this.element.value.substring(0,3)+"-"+this.element.value.substring(3,6)+"-"+this.element.value.substring(6,9);
    }else if(this.element.value.length>3){
      this.element.value = this.element.value.substring(0,3)+"-"+this.element.value.substring(3,6);
    }
  }
  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
  }
}
