import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursosService } from "./cursos/cursos.service";

@NgModule({
  declarations: [AppComponent, CursosComponent],
  imports: [BrowserModule],
  // Aqui ficam os nossos providers (Services) que são usados por esse component.
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
