import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatrixResponseDto } from './dtos/matrix-response.dto';
import { ZoneDto } from './dtos/zone.dto';
import { SectionDto } from './dtos/section.dto';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  getData(): Observable<MatrixResponseDto<ZoneDto, SectionDto>> {
    return this.httpClient.get<MatrixResponseDto<ZoneDto, SectionDto>>('./assets/zones.json');
  }
}
