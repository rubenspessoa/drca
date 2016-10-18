import {Secretariat} from './secretariat';
import {Professor} from './professor';

export class Department {
  id: number;
  name: string;
  secretariats: Secretariat[];
  professors: Professor[];
}
