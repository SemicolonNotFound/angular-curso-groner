import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos = ['C#', 'Angular', 'Typescript', 'Ionic', 'React'];

  mostrarCursos = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}