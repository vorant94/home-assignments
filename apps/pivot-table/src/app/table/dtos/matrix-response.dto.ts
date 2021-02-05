export interface MatrixResponseDto<Zone, Section> {
  viewId: number;
  policyId: number;
  zones: Zone[];
  sections: Section[];
  sectionsWithNetworkEntitiesCount: number
}
