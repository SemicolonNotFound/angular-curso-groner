# Curso Completo de Angular

Abaixo ficará um sumário explicativo com tudo que eu for aprendendo e assimilando durantes as aulas do curso de Angular, afim de fixar o conhecimento e ter um fácil acesso de consulta e esclarecimento de dúvidas.

## Data Binding

- Interpolation Property: {{ valor }}
- Property Binding: [propriedade]="valor"
- Event Binding: (evento)="propriedade"
- Two-way Data Binding: [(ngModel)]="propriedade"

### Interpolation Property - Do component para o template.

- Traz informações do component atráves das chaves.
- Usa-se chaves {{ valor }} para renderizar no template o valor da variável.

### Property Binding - Do component para o template.

- Faz bind de propriedades que existem nas tags para utilizá-las como recurso.
- Usa-se colchetes [src]="url" para utilizar o property binding.

### Event Binding - Do template para o component.

- Aciona métodos com determinadas ações no template.
- Usa-se (evento)="metodoAcao()" para criar um event binding.

### Two-way Data Binding - Do template para o component e vice-versa.

- Cria um vínculo entre a propriedade do component e o template. Trazendo e enviando seu valor
- Usa-se [()] <= Banana in a box [(ngModel)]="property" para referenciar.>

### Input Property

- Input properties são variáveis expostas com Input() ao seletor daquele component selector : 'app-input-property' no caso do exemplo.
- Desse modo elas podem ser acessadas nos templates que usarmos aquele selector, podendo atribuir um valor a essa variável.
  Ex: @Input() inputProperty = 'nome'; será acessado em um template <app-input-property inputProperty="João da Silva"></app-input-property>
- Poderemos também fazer isso com valores dinâmicos, nesse caso iremos usar property binding.
  Ex: @Input() inputProperty = 'nome'; será acessado em um template <app-input-property [inputProperty]="variavelMeuNome"></app-input-property>

### Output Property

- Output properties são variáveis expostas com @Output() ao componente pai.
- Desse modo podemos usar essa propriedade no template e repassar seu valor ao outros components/métodos.
  Ex: @Output() outputProperty = new EventEmitter(); Declaramos uma variável 'valor = 0;' Agora podemos repassar o valor que está sendo recebido aqui para nosso component.
- Teremos um método então chamando isso. meuMetodo() {this.mudouValor.emit({novoValor: this.valor})}

## Diretivas

- Diretivas Estruturais: São utilizadas para modificar o DOM. (Alterar nosso template) - *ngIf, *ngFor & etc.
- Diretivas de Atributos: Interagem com o elemento em que foram aplicadas. Por ex. Modificar a classe de objetos e classes. - ng-class, ng-style.

### Diretiva \*ngIf

- Executa semelhante ao condicional If que conhecemos. Ira iterar o valor da tag em que for declarado e o executará caso a condição for verdadeira.
- Se você tiver uma árvore de elementos pequena para exibir, pode usar o elemento [hidden] como alternativa para não sobrecarregar o DOM. Caso passar de 2/3 utilizar ngIf.
- Usa-se \*ngIf="condition" para adicionar essa diretiva.

### Diretiva \*ngFor

- Executa semelhante ao laço de repetição 'for' que conhecemos. Ira repetir o laço para cada item presente no meu array.
- Podemos então exibir item a item o que foi passado pelo laço. Por ex: let item of itens; e colocamos {{ item }} para mostrar todos os itens por vez.
- Usa-se \*ngFor="let item of items" para criar o laço de repetição. Pode ser aplicado a várias tags, no exemplo usamos um <li>

### Diretiva ng-class/ng-style

- Altera as informações de classe e estilo.
- Visualizar melhor depois, nada prática de se usar hoje em dia.

### Operador elvis / Safe Navigation Operator

- Serve para evitar erros de null pointer. / valores vindo vazio para o template.
- Usa-se um '?' ponto de interrogação antes de um atributo/variavel que poderá ser nula.
  Ex: {{ pessoa.fisica?.endereco?.rua }} como é possivel ver, tem como usá-lo mais de uma vez e aninhar isso em tudo q é recebido.
