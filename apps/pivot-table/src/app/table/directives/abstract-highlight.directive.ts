import { Directive, Input } from '@angular/core';
import { CoordsModel } from '../models/coords.model';

@Directive()
export abstract class AbstractHighlightDirective {

  @Input()
  activeCoords: CoordsModel;

  @Input()
  currentCoords: CoordsModel;

  protected constructor() {
  }

  protected get areCoordsInvalid(): boolean {
    return !this.activeCoords || !this.currentCoords;
  }

}
