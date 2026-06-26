import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
     @Input("renklendir") color:string | undefined
     @Input("test") name:string | undefined
  constructor(private el:ElementRef) {
    

  }
  @HostListener("mouseenter") method1(){
    console.log(this.color)
    console.log(this.name)
    this.el.nativeElement.style="color:red";
    console.log("Mouse Elementin üzerine geldi")
    this.el.nativeElement.innerHtml=this.name;
  }

  @HostListener("mouseleave") method2(){
    console.log(this.color)
    console.log(this.name)
    this.el.nativeElement.style="color:black";
    console.log("Mouse Elementin üzerinden ayrıldı")
  }
}
