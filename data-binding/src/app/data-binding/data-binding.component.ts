import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  // Variável que recebe uma url que será mostrada no template do componente.
  public url = "http://google.com";
  public cursoAngular = true;
  public urlImagem = "http://lorempixel.com/400/200/food/";

  constructor() {}

  public getValor() {
    return 1;
  }

  public curtirCurso() {
    return true;
  }

  ngOnInit() {}
}
