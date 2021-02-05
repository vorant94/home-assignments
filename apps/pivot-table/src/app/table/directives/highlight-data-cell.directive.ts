import { Directive, HostBinding } from '@angular/core';
import { AbstractHighlightDirective } from './abstract-highlight.directive';

@Directive({
  selector: '[haHighlightDataCell][activeCoords][currentCoords]'
})
export class HighlightDataCellDirective extends AbstractHighlightDirective {

  constructor() {
    super();
  }

  @HostBinding('class.active')
  get isActive(): boolean {
    if (this.areCoordsInvalid) {
      return;
    }

    const isActiveX: boolean = this.activeCoords.x === this.currentCoords.x;
    const isActiveY: boolean = this.activeCoords.y === this.currentCoords.y;

    return isActiveX && isActiveY;
  }

  @HostBinding('class.sub-active')
  get isSubActive(): boolean {
    if (this.areCoordsInvalid) {
      return;
    }

    const isSubActiveX: boolean = this.activeCoords.x === this.currentCoords.x
      && this.activeCoords.y > this.currentCoords.y;
    const isSubActiveY: boolean = this.activeCoords.x > this.currentCoords.x
      && this.activeCoords.y === this.currentCoords.y;

    return isSubActiveX || isSubActiveY;
  }

}
