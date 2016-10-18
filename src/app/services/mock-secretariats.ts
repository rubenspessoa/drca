import {Secretariat} from './secretariat';

export const SECRETARIATS : Secretariat[] = [
  {id: 10, name:'Graduação', departmentId: 1, disciplines: [
    {
      id: 1,
      name: 'Calculo',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [],
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        }
      ],
    },
    {
      id: 3,
      name: 'Física',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 2,
        name: 'Professor2',
        departmentId: 3
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        },
        {
          id: 2,
          name: 'Álgebra Linear',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [
            {
              id: 1,
              name: 'Calculo',
              credits: 4,
              mandatory: true,
              fromGraduationCourse: false,
              professor: {
                id: 1,
                name: 'Professor1',
                departmentId: 1
              },
              minimumCredits: 0,
              preRequisites: [],
            }
          ],
        }
      ],
    }
  ]},
  {id: 11, name:'Pós-graduação', departmentId: 1, disciplines: [
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
    }
  ]},
  {id: 12, name:'Graduação', departmentId: 2, disciplines: [
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
    }
  ]},
  {id: 13, name:'Graduação', departmentId: 3, disciplines: [
    {
      id: 1,
      name: 'Calculo',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [],
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        }
      ],
    },
    {
      id: 3,
      name: 'Física',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 2,
        name: 'Professor2',
        departmentId: 3
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        },
        {
          id: 2,
          name: 'Álgebra Linear',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [
            {
              id: 1,
              name: 'Calculo',
              credits: 4,
              mandatory: true,
              fromGraduationCourse: false,
              professor: {
                id: 1,
                name: 'Professor1',
                departmentId: 1
              },
              minimumCredits: 0,
              preRequisites: [],
            }
          ],
        }
      ],
    }
  ]},
  {id: 14, name:'Pós-graduação', departmentId: 3, disciplines: [
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
    }
  ]},
  {id: 15, name:'Graduação', departmentId: 4, disciplines: [
    {
      id: 1,
      name: 'Calculo',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [],
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        }
      ],
    },
    {
      id: 3,
      name: 'Física',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 2,
        name: 'Professor2',
        departmentId: 3
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        },
        {
          id: 2,
          name: 'Álgebra Linear',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [
            {
              id: 1,
              name: 'Calculo',
              credits: 4,
              mandatory: true,
              fromGraduationCourse: false,
              professor: {
                id: 1,
                name: 'Professor1',
                departmentId: 1
              },
              minimumCredits: 0,
              preRequisites: [],
            }
          ],
        }
      ],
    }
  ]},
  {id: 16, name:'Pós-graduação', departmentId: 4, disciplines: []},
  {id: 17, name:'Graduação', departmentId: 5, disciplines: [
    {
      id: 1,
      name: 'Calculo',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [],
    },
    {
      id: 2,
      name: 'Álgebra Linear',
      credits: 4,
      mandatory: true,
      fromGraduationCourse: false,
      professor: {
        id: 1,
        name: 'Professor1',
        departmentId: 1
      },
      minimumCredits: 0,
      preRequisites: [
        {
          id: 1,
          name: 'Calculo',
          credits: 4,
          mandatory: true,
          fromGraduationCourse: false,
          professor: {
            id: 1,
            name: 'Professor1',
            departmentId: 1
          },
          minimumCredits: 0,
          preRequisites: [],
        }
      ],
    }
  ]}
];
