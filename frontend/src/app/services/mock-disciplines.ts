import { Discipline } from './discipline';

export const DISCIPLINES: Discipline[] = [
  {
    id: 1,
    name: 'Calculo',
    credits: 4,
    mandatory: true,
    fromGraduationCourse: false,
    professor: {id: 1,name: 'Professor1',departmentId: 1},
    minimumCredits: 0,
    preRequisites: [],
    secretariatId: 10
  },
  {
    id: 2,
    name: 'Álgebra Linear',
    credits: 4,
    mandatory: true,
    fromGraduationCourse: false,
    professor: {id: 1,name: 'Professor1',departmentId: 1},
    minimumCredits: 0,
    preRequisites: [
      {
        id: 1,
        name: 'Calculo',
        credits: 4,
        mandatory: true,
        fromGraduationCourse: false,
        professor: {id: 1,name: 'Professor1',departmentId: 1},
        minimumCredits: 0,
        preRequisites: [],
        secretariatId: 10
      }
    ],
    secretariatId: 10
  },
  {
    id: 3,
    name: 'Física',
    credits: 4,
    mandatory: true,
    fromGraduationCourse: false,
    professor: {id: 2, name: 'Professor2', departmentId: 3},
    minimumCredits: 0,
    preRequisites: [
      {
        id: 2,
        name: 'Álgebra Linear',
        credits: 4,
        mandatory: true,
        fromGraduationCourse: false,
        professor: {id: 1,name: 'Professor1',departmentId: 1},
        minimumCredits: 0,
        preRequisites: [
          {
            id: 1,
            name: 'Calculo',
            credits: 4,
            mandatory: true,
            fromGraduationCourse: false,
            professor: {id: 1,name: 'Professor1',departmentId: 1},
            minimumCredits: 0,
            preRequisites: [],
            secretariatId: 10
          }
        ],
        secretariatId: 10
      }
    ],
    secretariatId: 10
  },
  {
    id: 4,
    name: 'Engenharia de Software',
    credits: 4,
    mandatory: true,
    fromGraduationCourse: true,
    professor: {
      id: 3,
      name: 'Professor3',
      departmentId: 4
    },
    minimumCredits: 0,
    preRequisites: [],
    secretariatId: 11
  },
  {
    id: 5,
    name: 'Organização e Arquitetura de Computadores',
    credits: 4,
    mandatory: true,
    fromGraduationCourse: true,
    professor: {
      id: 2,
      name: 'Professor2',
      departmentId: 3
    },
    minimumCredits: 40,
    preRequisites: [],
    secretariatId: 11
  }
];
