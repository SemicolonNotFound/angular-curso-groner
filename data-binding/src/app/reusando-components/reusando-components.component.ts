import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reusando-components",
  templateUrl: "./reusando-components.component.html",
  styleUrls: ["./reusando-components.component.css"]
  // outputs: [''] pode ser feito igualmente aos inputs.
})
export class ReusandoComponentsComponent implements OnInit {
  nomeDoCurso = "Angular";
  valorInicial = 15;

  constructor() {}

  ngOnInit() {}

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
