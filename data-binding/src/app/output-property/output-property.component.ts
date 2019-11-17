import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-output-property",
  templateUrl: "./output-property.component.html",
  styleUrls: ["./output-property.component.css"]
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;

  // Agora esse evento está sendo exposto ao componente pai.
  @Output() mudouValor = new EventEmitter();

  // Referencia uma variavel local que existe no template para uma variavel declarada aqui no component.
  @ViewChild('campoInput', {static: true}) campoValorInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  decrementaValor() {
    // Agora estamos usando a referencia direta do nosso input para saber e alterar o seu value.
    // Diferente de incrementar apenas com ++ estamos indo ao value do input e alterando isso.
    // Dessa forma poderiamos alterar qualquer coisa. Usando o this.valor-- teriamos acesso apenas a alterar o valor conhecido.
    this.campoValorInput.nativeElement.value--;
    // Toda vez que o método for chamado ela ira emitir o valor
    // Essa emissão terá uma variavel que recebe o conteúdo de valor atual.
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementaValor() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
