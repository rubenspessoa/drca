import {Component} from '@angular/core';

@Component({
  selector: 'fountain-discipline',
  template: require('./templates/discipline.component.html')
})
export class DisciplineComponent {
  public text: string;

  constructor() {
    this.text = 'Pauta da Disciplina x';
  }
}
