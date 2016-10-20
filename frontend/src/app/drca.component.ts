import { Component } from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./templates/drca.component.html')
})

export class DrcaComponent {
  public title: string;
  public subtitle: string;

  constructor() {
    this.title = 'DRCA';
    this.subtitle = 'Departamento de Registro e Controle Acadêmico';
  }
}
