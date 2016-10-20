import { Injectable } from '@angular/core';

import { Professor } from './professor';
import { PROFESSORS } from './mock-professors';

@Injectable()
export class ProfessorService {

  getProfessors(): Promise<Professor[]> {
    return Promise.resolve(PROFESSORS);
  }

  getProfessor(id: number): Promise<Professor> {
    return this.getProfessors()
      .then(professors => professors.find(professor => professor.id === id));
  }
}
