import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) { 
  
  }
  ngOnInit(){
    var element = this.el.nativeElement
    element.style.color ="white";
    element.style.background = "red";
    element.style.padding = "15px";
    
    element.innerText = element.innerText.toUpperCase().replace("PERSONALIZADA", "PERSONALIZADA CAMBIADA DESDE LA DIRECTIVA...");
  }

}
