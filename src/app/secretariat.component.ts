import {Component} from '@angular/core';

@Component({
  selector: 'secretariat.component',
  template: require('./secretariat.component.html')
})
export class SecretariatComponent {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}
