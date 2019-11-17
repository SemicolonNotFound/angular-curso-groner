# Curso Completo de Angular

## Data Binding
- Interpolation Property: {{ valor }} 
- Property Binding: [propriedade]="valor"
- Event Binding: (evento)="propriedade"
- Two-way Data Binding: [(ngModel)]="propriedade"

### Interpolation Property - do component para o template.
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