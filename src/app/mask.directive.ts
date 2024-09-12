import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  
  appMask : string = ""

   

  constructor() { }

}
