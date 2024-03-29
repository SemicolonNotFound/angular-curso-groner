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

## Directives / Diretivas

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

### Funcionamento do ng-content

- Serve com um container de conteúdo que será sobreescrito pelo componente pai.
  Ex: em <app-root> eu declaro meu selector '<app-ng-content>Conteúdo que aparece no ng-content</app-ng-content>' e dentro da tag repasso meu texto de informação.
- Agora, dentro do template do <app-ng-content> eu adiciono um <ng-content></ng-content>. Meu conteúdo por final aparecerá entre essas tags do ng-content.
  Ex: <ng-content>Conteúdo que aparece no ng-content</ng-content>
- Posso inclusive repassar um outro componente ou vários dentro do meu <app-ng-content> que isso será renderizado dentro do <ng-content>.
- Para identificar o que aparecerá em diversos <ng-content> diferentes, posso repassar nome de classes e ids para indentificá-los.

## Services / Serviços

- São usados para buscar e enviar dados ao servidor.
- São responsáveis pelas regras de negócio.
- Úteis para evitar DRY - Don't Repeat Yourself (Código repetido).
- São responsáveis por ter nossas classes utilitárias. (métodos que podem ser usados em todo o programa).
- É também uma classe na qual temos os nossos métodos para fazer CRUD (Create, Read, Update, Delete).
- Serviços podem SIM, ser injetados dentro de outros serviços. Isso acontece em casos de serviços utilitários serem injetados em serviços específicos.

### Injeção de Dependência (DI)

- Significa que uma classeA necessita de uma classeB para funcionar.
  Ex: ClasseComponent precisa da ClasseService para poder listar Informações. Ou seja, ClasseComponent tem uma depêndecia na ClasseService para poder funcionar. Nesse caso, se faz necessário instaciar a ClasseService no construtor da nossa ClasseComponent para que essa classe possa funcionar corretamente.
- Pelo amor de Jeová, não faça instancia de services manualmente em suas classes dependentes.
- Para informar que uma classe pode ser injetada. Adicionamos o decorator 'Injectable()' acima da declaração da classe.
- Quando uma Injectable() é feito manualmente, se faz necessário também adicionar ela como um provider no módulo do componente. Nesse caso 'app.module.ts' dentro de providers: [].

### Escopo de Instâncias

- Singleton: Apenas uma instância da classe para toda a aplicação.
- Em app.module se usa o BrowserModule e modulo de funcionalidades se usa o CommonModule.
- Se quiser que o service tenha escopo global, ele deve ser declarado no provider do app.module.ts, senão deve ser instanciado em um provider de um módulo de funcionalidades. Esses módulos de funcionalidades são módulos respectivos dentro da aplicação e que podem ser usados por um determinado número de components que estarão nas 'declarations' desse módulo.
- Caso queira que um serviçotenha uma instancia separada para determinado component, você o declara logo abaixo do selector com o metadado 'providers: [meuServico];'
- Usamos o EventEmitter para emitir para outro local alguma coisa. No caso o valor do nosso curso. E no componente fazemos um subscribe para capturar / ouvir esse valor.

## Pipes (Filtros de exibição)

São usados para transformar um valor repassado em um Interpolation dentro do template.

- Pipes fazem parte do pacote 'Commom Module/Browser Module' então não precisamos importar nada para usá-los.
- Pipes criados precisam ser importados no módulo de onde ele será usado.
- Locale é uma forma de internacionalizar os Pipes (por exemplo substituir o ponto por vírgula no dinheiro) pois é assim que funciona no Brasil.
- Pipe Puro: Não olha as modificações/Atualizações. Pipe impuro, sim.
- Não filtre arrays com pipe em projetos. Causa perda de desempenho.
- Pipe Async permite que não gere erros no template quando uma solicitação precisar de um tempo para ser exibida, tal como uma requisição no servidor.

## Routing/Roteamento

SPA são páginas de aplicações únicas onde o a página não é recarregada por completo para mostrar um novo conteúdo, apenas aquela parte específica.
O roteamento utiliza também as Hashs (url endpoints) para indicar em que parte/componente da aplicação está

### Router outlet

- Router outlet é uma tag que irá servir para substituir o conteúdo que virá da nossa rota na aplicação.
- Em um arquivo específico nós indicamos quais serão as rotas, repassando o componente/template que será exibido caso estejamos naquela rota.
- Para navegar entre as rotas nós definimos um routerLink que indica para qual endpoint eu devo ir.
- routerLinkActive="active" define que um css indicando ativo será adicionado a uma rota ativa.

### Rotas ativas

- ActivatedRoute É um parâmetro injetável no construtor para extrair os parâmetros do roteamento.
- Os parâmetros das rotas são do tipo Behavior Subject, ou seja, podem alterar e por isso podemos nos inscrever nele.
