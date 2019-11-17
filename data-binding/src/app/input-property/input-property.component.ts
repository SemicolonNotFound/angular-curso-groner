import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-property",
  templateUrl: "./input-property.component.html",
  styleUrls: ["./input-property.component.css"]
  // Podemos expor aqui também nossos inputs
  // inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {
  // Com o decorator Input conseguimos expor uma propriedade, nesse caso 'nomeCurso',
  // para o selector desse component. Nesse caso 'app-input-property'.
  // Podemos também usar a variável internamente como nomeCurso e externamente como nomeCursoExterno.
  @Input("nomeCursoExterno") nomeCurso = "";
  constructor() {}

  ngOnInit() {}
}
