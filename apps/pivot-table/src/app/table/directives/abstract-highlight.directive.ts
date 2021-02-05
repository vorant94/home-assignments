import { Directive, Input } from '@angular/core';

@Directive()
export abstract class AbstractHighlightDirective {

  @Input()
  activeCoords: { x: number, y: number };

  @Input()
  currentCoords: { x: number, y: number };

  protected constructor() { }

  protected get areCoordsInvalid(): boolean {
    return !this.activeCoords || !this.currentCoords;
  }

}
