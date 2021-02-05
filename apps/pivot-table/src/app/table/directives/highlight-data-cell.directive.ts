import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractHighlightDirective } from './abstract-highlight.directive';
import { SectionDto } from '../dtos/section.dto';

@Directive({
  selector: '[haHighlightDataCell][activeCoords][currentCoords][section]'
})
export class HighlightDataCellDirective extends AbstractHighlightDirective {

  @Input() section: SectionDto;

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

  @HostBinding('class.striped-cell')
  get isStripedCell(): boolean {
    const isDiagonal: boolean = this.currentCoords.x === this.currentCoords.y;

    return isDiagonal && !this.section;
  }

}
