import { Directive, HostBinding } from '@angular/core';
import { AbstractHighlightDirective } from './abstract-highlight.directive';

@Directive({
  selector: '[haHighlightHeaderCell][activeCoords][currentCoords]'
})
export class HighlightHeaderCellDirective extends AbstractHighlightDirective {

  constructor() {
    super();
  }

  @HostBinding('class.sub-active')
  get isActive(): boolean {
    if (this.areCoordsInvalid) {
      return false;
    }

    const isActiveX: boolean = this.activeCoords.x === this.currentCoords.x;
    const isActiveY: boolean = this.activeCoords.y === this.currentCoords.y;

    return isActiveX || isActiveY;
  }

}
