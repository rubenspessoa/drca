import { Injectable } from '@angular/core';

import { Discipline } from './discipline';
import { Secretariat } from './secretariat';
import { SECRETARIATS } from './mock-secretariats';

@Injectable()
export class SecretariatService {

  getSecretariats(): Promise<Secretariat[]> {
    return Promise.resolve(SECRETARIATS);
  }

  getSecretariat(id: number): Promise<Secretariat> {
    return this.getSecretariats()
      .then(secretariats => secretariats.find(secretariat => secretariat.id === id));
  }
}
