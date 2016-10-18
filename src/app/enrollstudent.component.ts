import {Component, OnInit, AfterViewChecked} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {StudentService} from './services/student.service';
import {Student} from './services/student';

import {SecretariatService} from './services/secretariat.service';

import {DisciplineService} from './services/discipline.service';
import {Discipline} from './services/discipline';


@Component({
  selector: 'fountain-enrollstudent',
  template: require('./templates/enrollstudent.component.html')
})
export class EnrollStudentComponent implements OnInit, AfterViewChecked {
  public text: string;
  selectedDiscipline: Discipline;
  disciplines: Discipline[];
  student: Student;

  constructor(
    private disciplineService: DisciplineService,
    private studentService: StudentService,
    private secretariatService: SecretariatService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.text = 'My brand new component!';
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      let id = +params['id'];
      this.getStudent(id);
      console.log(id);
      console.log(this.student);
      this.getDisciplines(this.student.secretariatId);
    });

    console.log(this.student);

  }

  ngAfterViewChecked(): void {
    //this.getDisciplines(this.student.secretariatId);
  }

  // Understand the best moment to call it. Ps.: It doesn't work on ngOnInit
  getDisciplines(secretariatId: number): void {
    this.disciplineService.getDisciplinesBy(secretariatId)
      .then(disciplines => this.disciplines = disciplines);
  }

  getStudent(id: number): void {
    this.studentService.getStudent(id)
      .then(student => this.student = student);
  }

  onSelect(discipline: Discipline): void {
    this.selectedDiscipline = discipline;
  }
}
