import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective {
  @Input() rotate: number = 0;
  @Input() step: number = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const reverse = event.shiftKey;

    const currentRotation = this.rotate || 0;

    const newRotation = reverse
      ? currentRotation - this.step
      : currentRotation + this.step;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `rotate(${newRotation}deg)`
    );

    this.rotate = newRotation;
  }
}
