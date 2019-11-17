import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-output-property",
  templateUrl: "./output-property.component.html",
  styleUrls: ["./output-property.component.css"]
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  // Agora esse evento está sendo exposto ao componente pai.
  @Output() mudouValor = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  decrementaValor() {
    this.valor--;
    // Toda vez que o método for chamado ela ira emitir o valor
    // Essa emissão terá uma variavel que recebe o conteúdo de valor atual.
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementaValor() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
