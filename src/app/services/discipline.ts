import { Professor } from './professor';
import { Student } from './student';

export class Discipline {
  id: number;
  name: string;
  credits: number;
  mandatory: boolean;
  fromGraduationCourse: boolean;
  professor: Professor;
  minimumCredits: number;
  preRequisites: Discipline[];
}
