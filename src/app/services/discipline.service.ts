import { Injectable } from '@angular/core';

import { Discipline } from './discipline';
import { DISCIPLINES } from './mock-disciplines';

@Injectable()
export class DisciplineService {

  getDisciplines(): Promise<Discipline[]> {
    return Promise.resolve(DISCIPLINES);
  }

  getDisciplinesBy(secretariatId: number): Promise<Discipline[]> {
    return this.getDisciplines()
      .then(disciplines => disciplines.filter(discipline => discipline.secretariatId === secretariatId));
  }
}
