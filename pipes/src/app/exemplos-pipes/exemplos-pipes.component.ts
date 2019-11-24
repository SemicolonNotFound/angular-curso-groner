import { Component, OnInit } from "@angular/core";
import { reject } from "q";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-exemplos-pipes",
  templateUrl: "./exemplos-pipes.component.html",
  styleUrls: ["./exemplos-pipes.component.css"]
})
export class ExemplosPipesComponent implements OnInit {
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor Async"), 2000);
  });

  valorAsync2 = interval(2000).pipe(map(valor => "Valor Async 2"));

  livro: any = {
    titulo: "Titulo do Livro",
    rating: 4.5874,
    numeroPaginas: 314,
    preco: 44.87,
    dataLancamento: new Date(2018, 11, 3),
    url: "http://google.com.br"
  };

  filtro: string;

  livros = ["Java", "Angular", "Shell Script"];

  constructor() {}

  ngOnInit() {}

  addCurso(valor: string) {
    this.livros.push(valor);
  }
}
