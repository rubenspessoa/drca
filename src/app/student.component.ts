import {Component} from '@angular/core';

@Component({
  selector: 'fountain-student',
  template: require('./templates/student.component.html')
})
export class StudentComponent {
  public text: string;

  constructor() {
    this.text = 'Comprovante de Matrícula';
  }
}
