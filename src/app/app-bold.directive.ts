import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})
export class AppBoldDirective {

  @Input() bgColor: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')onmouseenter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }

  @HostListener('mouseleave')onmouseleave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.backgroundColor = 'initial';
  }
}
