import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {
  @Input('appMovement') color: string;

  constructor(private el: ElementRef) {}

   @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.color);
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.changeColor('white');
   }

   private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }



}