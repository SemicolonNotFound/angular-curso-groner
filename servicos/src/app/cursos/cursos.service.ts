import { EventEmitter, Injectable } from "@angular/core";

// Com o decorator abaixo 'Injectable()' nos dizemos ao Angular que essa é uma classe injetável.
@Injectable()
export class CursosService {
  // Em atributos static não precisamos da instância da classe para acessar a propriedade.
  // Podemos então fazer 'CursosService.criouNovoCurso...' e não 'this.criouNovoCurso'
  // Isso tira a necessidade de instânciar o service no construtor.
  // Essa variável será compartilhada entre as instâncias por ela ser estática.
  static criouNovoCurso = new EventEmitter<string>();

  // Com esse objeto é possível emitir eventos e se inscrever em eventos.
  // Sempre que haja um novo evento podemos notificar o código para fazer algo.
  // O objetivo é passar apenas o nome do curso criado, que no caso é uma string, por isso está tipado como tal.
  emitirCursoCriado = new EventEmitter<string>();

  constructor() {
    console.log("CursosService");
  }

  private cursos = ["Angular", "Java", "Ionic"];

  public getCursos() {
    //  Fizemos o refactoring para que nossas infos fiquem protegidas e possam ser acessadas apenas pelo método e não diretamente.
    return this.cursos;
  }

  public addCurso(curso: string) {
    // Adiciona a minha lista de cursos. Meu array de cursos. O parâmetro passado. Nesse caso um curso, do tipo string.
    this.cursos.push(curso);

    // Sempre que o método addCurso() for chamado, iremos emitir uma informação.
    // Nesse caso a informação é a string do curso criado
    this.emitirCursoCriado.emit(curso);

    // Acessa o serviço diretamente sem precisar instânciar já que nosso atributo é estático.
    // Irá emitir o valor de criouNovoCurso passando o curso do tipo string como parâmetro.
    // Isso será ouvido/notificado para um subscribe() existente no componente que quiser e tiver acesso a esse método.
    CursosService.criouNovoCurso.emit(curso);
  }
}
