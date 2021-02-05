import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TableService } from './table.service';
import { SectionDto } from './dtos/section.dto';
import { ZoneDto } from './dtos/zone.dto';
import { CoordsModel } from './models/coords.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'ha-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit, OnDestroy {

  sectionsMap: Record<string, SectionDto> = {};
  zones: ZoneDto[] = [];

  activeCoords: CoordsModel | undefined;

  private sub$: Subscription | undefined;

  constructor(
    private readonly tableService: TableService
  ) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

  onCellMouseover(coords: CoordsModel): void {
    this.activeCoords = coords;
  }

  onTableMouseleave(): void {
    this.activeCoords = null;
  }

  private fetchData(): void {
    this.sub$ = this.tableService.getData()
      .subscribe(({ zones, sections }) => {
        this.zones = [...zones];

        this.sectionsMap = sections
          .reduce((acc, curr) => ({
            ...acc,
            [`${curr.sourceGuid}${curr.destinationGuid}`]: curr
          }), {});
      });
  }

}
