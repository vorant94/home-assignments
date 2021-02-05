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

  sections: Record<string, SectionDto>[] = [];
  zones: ZoneDto[] = [];

  activeCoords: CoordsModel;

  private sub$: Subscription;

  constructor(
    private readonly tableService: TableService
  ) {
  }

  originalOrder = (): number => {
    return 0;
  };

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

        const temp: Record<string, SectionDto> = sections
          .reduce((acc, curr) => ({
            ...acc,
            [`${curr.sourceGuid}${curr.destinationGuid}`]: curr
          }), {});

        this.sections = zones
          .map(zone => zones
            .reduce((acc, { guid: yGuid }) => ({
              ...acc,
              [yGuid]: temp[zone.guid + yGuid]
            }), {}));
      });
  }

}
