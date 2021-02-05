import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDataCellDirective } from './directives/highlight-data-cell.directive';
import { HighlightHeaderCellDirective } from './directives/highlight-header-cell.directive';


@NgModule({
  declarations: [
    TableComponent,
    HighlightDataCellDirective,
    HighlightHeaderCellDirective
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule
  ]
})
export class TableModule {
}
