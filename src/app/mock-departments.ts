import { Department } from './department';

export const DEPARTMENTS: Department[] = [
  {
    id: 1,
    name: 'Instituto de Computação',
    secretariats: [
      {
        id: 10,
        name:'Graduação'
      },
      {
        id: 11,
        name:'Pós-graduação'
      }
    ]},
  {
    id: 2,
    name: 'Instituto de Matemática',
    secretariats: [
      {
        id: 12,
        name:'Graduação'
      }
    ]
  },
  {
    id: 3,
    name: 'Instituto de Física',
    secretariats: [
    {
      id: 13,
      name:'Graduação'
    },
    {
      id: 14,
      name:'Pós-graduação'
    }
  ]
},
  {
    id: 4,
    name: 'Centro de Educação',
    secretariats: [
    {
      id: 15,
      name:'Graduação'
    },
    {
      id: 16,
      name:'Pós-graduação'
    }
  ]
},
  {
    id: 5,
    name: 'Centro de Saúde',
    secretariats: [
    {
      id: 17,
      name:'Graduação'
    }
  ]
}
];
