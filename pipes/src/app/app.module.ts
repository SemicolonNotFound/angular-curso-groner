import { registerLocaleData } from "@angular/common";
import br from "@angular/common/locales/pt";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CamelCasePipe } from "./camel-case.pipe";
import { ExemplosPipesComponent } from "./exemplos-pipes/exemplos-pipes.component";
import { FiltroArrayPipe } from "./filtro-array.pipe";
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

registerLocaleData(br, "pt-BR");

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [BrowserModule, FormsModule],
  // Provide useClass
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
