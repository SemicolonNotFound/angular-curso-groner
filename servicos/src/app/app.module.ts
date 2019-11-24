import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CriarCursoModule } from "./criar-curso/criar-curso.module";
import { CursosModule } from "./cursos/cursos.module";
import { CursosService } from "./cursos/cursos.service";
import { LogService } from "./shared/log.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CursosModule, CriarCursoModule],
  // Aqui ficam os nossos providers (Services) que são usados por esse component.
  providers: [CursosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
