// tslint:disable: directive-selector
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({selector: '[myClick1]'})
export class SmsPassword {
  @Output
  ('myClick1') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Send SMS to customer' : '');

      });
  }
}
