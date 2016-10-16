import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  styles: [],
  template: require('./drca.html')
})

export class DrcaComponent {
  public title: string;
  public subtitle: string;

  constructor() {
    this.title = 'DRCA';
    this.subtitle = 'Departamento de Registro e Controle Acadêmico';
  }
}
