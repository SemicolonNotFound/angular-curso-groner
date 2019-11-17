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
