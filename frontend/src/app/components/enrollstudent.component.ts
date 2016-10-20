import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {StudentService} from '../services/student.service';
import {Student} from '../services/student';

import {SecretariatService} from '../services/secretariat.service';
import {Secretariat} from '../services/secretariat';

import {DisciplineService} from '../services/discipline.service';
import {Discipline} from '../services/discipline';

import {DepartmentService} from '../services/department.service';
import {Department} from '../services/department';

import {StudentAttendsDisciplineService} from '../services/studentAttendsDiscipline.service';

@Component({
  selector: 'fountain-enrollstudent',
  template: require('../templates/enrollstudent.component.html')
})

export class EnrollStudentComponent implements OnInit {
  public text: string;
  selectedDiscipline: Discipline;
  disciplines = [];
  secretariat: Secretariat;
  departmentSecretariats: Secretariat[];
  student: Student;
  department: Department;
  enrolled: boolean;

  constructor(
    private disciplineService: DisciplineService,
    private studentService: StudentService,
    private secretariatService: SecretariatService,
    private departmentService: DepartmentService,
    private studiscService: StudentAttendsDisciplineService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.text = 'My brand new component!';
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getStudent(id).then(
        student => {
          this.getSecretariat(this.student.secretariatId).then(
            secretariat => {
              this.getDepartment(this.secretariat.departmentId).then(
                depatment => {
                  this.getSecretariatsFrom(this.department.id).then(
                    secretariats => {
                      secretariats.forEach(
                        secretariat => {
                          this.getDisciplines(secretariat.id);
                        }
                      )
                    }
                  )
                }
              );
            }
          );
        }
      );
    });
  }

  getDisciplines(secretariatId: number): void {
    this.disciplineService.getDisciplinesBy(secretariatId)
      .then(disciplines => {
        disciplines.forEach(
          discipline => {
            this.disciplines.push(discipline);
          }
        );
      });
  }

  getInfoAboutDiscipline(): void {
    this.studiscService.getDisciplinesBy(this.student.id).then(
      studiscs => {
          if (studiscs.find(studisc => studisc.disciplineId === this.selectedDiscipline.id)) {
            this.enrolled = true;
          } else {
            this.enrolled = false;
          };
        }
      );
    }


  getStudent(id: number): Promise<Student> {
    return this.studentService.getStudent(id)
      .then(student => this.student = student);
  }

  getSecretariat(id: number): Promise<Secretariat> {
    return this.secretariatService.getSecretariat(id)
      .then(secretariat => this.secretariat = secretariat);
  }

  getSecretariatsFrom(departmentId: number): Promise<Secretariat[]> {
    return this.secretariatService.getSecretariatBy(departmentId)
      .then(secretariats => this.departmentSecretariats = secretariats);
  }

  getDepartment(id: number): Promise<Department> {
    return this.departmentService.getDepartment(id)
      .then(department => this.department = department);
  }

  onSelect(discipline: Discipline): void {
    this.selectedDiscipline = discipline;
    this.getInfoAboutDiscipline();
  }
}
