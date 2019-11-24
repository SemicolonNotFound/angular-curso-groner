import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "camelCase"
})
// Implementa essa interface PipeTransform.
export class CamelCasePipe implements PipeTransform {
  // Fazendo isso precisamos declarar o método transform()
  // Ele irá transformar o valor em outra coisa para mostrar na tela
  // Passamos primeiramente o valor e também quantos argumentos nós quisermos.
  transform(value: any, ...args: any[]): any {
    // Separa todas as palavras da frase por espaço usando o split.
    const values = value.split(" ");

    // Essa variável será retornada como resultado da transformação.
    let result = "";

    // Iterando os valores do values, retornando cada palavra da nossa frase (array)
    for (const v of values) {
      result += this.capitalize(v) + " ";
    }
    return result;
  }

  // retorna substring (parte da minha string) onde eu quero a primeira letra (índice 0) e apenas ela. Então 1.
  // Coloco essa primeira letra como uppercase e depois faço denovo para o restante das letras todas em minúsculo.
  capitalize(value: string) {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

  retardWrite(value: string) {
    return value.substr(1, 1).toUpperCase() + value.substr(0, 1).toLowerCase();
  }
}
