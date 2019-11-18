import { Component, OnInit } from "@angular/core";

import { CursosService } from "./cursos.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos = [];
  cursosServiceVar: CursosService;

  constructor(private cursosService: CursosService) {
    // Não queremos fazer essa instanciação manualmente, principalmente se precisarmos passar parâmetros.
    // Isso se tornará muito complexo de declarar futuramente, pois gerará uma cadeia enorme de parâmetros.
    // this.cursosService = new CursosService();

    // O correto é fazer instanciando o service como parâmetro do constructor e atribuindo posteriormente ele a uma variavel.
    this.cursosServiceVar = cursosService;
  }

  // Esse é o método que é executado quando essa classe é carregada.
  ngOnInit() {
    // Como ele é executado iniciando o template. Nós iremos usa-lo para invocar nosso método que retorna os cursos e exibilos na página.
    this.cursos = this.cursosService.getCursos();

    // Nos inscrevemos no emissor de eventos para que eu seja notificado quando um novo valor for emitido.
    // Temos abaixo uma Arrow Function. Criamos uma variável local que receberá o valor como parâmetro.
    // this.cursosService.emitirCursoCriado.subscribe((curso: string) => console.log(curso));

    // Temos acesso direto ao serviço mas não ao atributo emitirCursoCriado pois ele não é estático.
    CursosService.criouNovoCurso.subscribe((curso: string) =>
      this.cursos.push(curso) // Iremos adicionar esse curso que foi enviado via EventEmitter a nossa variável array.
    );
  }
}
