import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { SectionDto } from './dtos/section.dto';
import { KeyValue } from '@angular/common';
import { ZoneDto } from './dtos/zone.dto';


@Component({
  selector: 'ha-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  sections: Record<string, SectionDto>[] = [];
  zones: ZoneDto[] = [];

  activeCoords: { x: number, y: number };

  constructor(
    private readonly tableService: TableService
  ) {
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  };

  ngOnInit() {
    this.tableService.getData()
      .subscribe(({ zones, sections }) => {
        const items: { [key: string]: SectionDto } = {};
        sections.forEach(section => {
          items[`${section.sourceGuid}${section.destinationGuid}`] = section;
        });

        this.zones = [];

        this.sections = zones
          .map(zone => {
            this.zones.push(zone);

            return zones
              .reduce((acc, { guid: yGuid }) => ({
                ...acc,
                [yGuid]: items[zone.guid + yGuid]
              }), {});
          });

        console.log(this.sections);
      });
  }

  onCellMouseover(x: number, y: number) {
    this.activeCoords = { x, y };
  }

}
