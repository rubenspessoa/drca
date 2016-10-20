import { Injectable } from '@angular/core';

import { StudentAttendsDiscipline } from './studentAttendsDiscipline';
import { STUDISC } from './mock-studentAttendsDiscipline';
import { Student } from './student';

@Injectable()
export class StudentAttendsDisciplineService {

  getStudentAttendsDisciplines(): Promise<StudentAttendsDiscipline[]> {
    return Promise.resolve(STUDISC);
  }

  getStudentsBy(disciplineId: number): Promise<StudentAttendsDiscipline[]> {
    return this.getStudentAttendsDisciplines()
      .then(studiscs => studiscs.filter(studisc => studisc.disciplineId === disciplineId));
  }

  getDisciplinesBy(studentId: number): Promise<StudentAttendsDiscipline[]> {
    return this.getStudentAttendsDisciplines()
      .then(studiscs => studiscs.filter(studisc => studisc.studentId === studentId));
  }
}
