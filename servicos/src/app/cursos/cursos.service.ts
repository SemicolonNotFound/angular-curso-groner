import { Injectable } from '@angular/core';

// Com o decorator abaixo 'Injectable()' nos dizemos ao Angular que essa é uma classe injetável.
@Injectable()
export class CursosService {
  getCursos() {
    return ["Angular", "Java", "Ionic"];
  }
}
