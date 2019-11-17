import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-operador-elvis",
  templateUrl: "./operador-elvis.component.html",
  styleUrls: ["./operador-elvis.component.css"]
})
export class OperadorElvisComponent implements OnInit {
  usuario = { nome: "Lucas", idade: 21, endereco: { rua: "ABC", numero: null } };

  constructor() {}

  ngOnInit() {}
}
