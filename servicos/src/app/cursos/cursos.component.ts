import { Component, OnInit } from "@angular/core";

import { CursosService } from "./cursos.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  cursos = [];
  CursosService: CursosService;

  constructor() {
    // Não queremos fazer essa instanciação manualmente, principalmente se precisarmos passar parâmetros.
    // Isso se tornará muito complexo de declarar futuramente, pois gerará uma cadeia enorme de parâmetros.
    this.CursosService = new CursosService();
  }

  // Esse é o método que é executado quando essa classe é carregada.
  ngOnInit() {
    this.cursos = this.CursosService.getCursos();
  }
}
