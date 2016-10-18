import { Department } from './department';

export const DEPARTMENTS: Department[] = [
  {
    id: 1,
    name: 'Instituto de Computação',
    secretariats: [
      {id: 10, name:'Graduação', departmentId: 1},
      {id: 11, name:'Pós-graduação', departmentId: 1}
    ],
    professors: [
      {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Instituto de Matemática',
    secretariats: [
      {id: 12, name:'Graduação', departmentId: 2}
    ],
    professors: []
  },
  {
    id: 3,
    name: 'Instituto de Física',
    secretariats: [
      {id: 13, name:'Graduação', departmentId: 3},
      {id: 14, name:'Pós-graduação', departmentId: 3}
    ],
    professors: [
      {
        id: 2,
        name: 'Professor2',
        departmentId: 3
      }
    ]
  },
  {
    id: 4,
    name: 'Centro de Educação',
    secretariats: [
      {id: 15, name:'Graduação', departmentId: 4},
      {id: 16, name:'Pós-graduação', departmentId: 4}
    ],
    professors: [
      {
        id: 3,
        name: 'Professor3',
        departmentId: 4
      }
    ]
  },
  {
    id: 5,
    name: 'Centro de Saúde',
    secretariats: [
      {id: 17, name:'Graduação', departmentId: 5}
    ],
    professors: []
  }
];
