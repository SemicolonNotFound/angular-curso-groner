import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"]
})
export class EventBindingComponent implements OnInit {
  valorAtual = "";
  valorSalvo;

  public isMouseOver = false;
  constructor() {}

  ngOnInit() {}

  public botaoClicado() {
    alert("Botão clicado");
  }

  public salvarValor() {
    this.valorSalvo = this.valorAtual;
  }

  // Irá negar o valor.
  public OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  // Capturamos o evento do template e tipamos o método com ele.
  public onKeyUp(evento: KeyboardEvent) {
    console.log();
    // Definimos que o evento tem que respeitar a interface HTMLInputElement e obter o valor.
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }
}
