import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { ClassStyleBindingComponent } from "./class-style-binding/class-style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { InputPropertyComponent } from './input-property/input-property.component';
import { ReusandoComponentsComponent } from './reusando-components/reusando-components.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputPropertyComponent,
    ReusandoComponentsComponent,
    OutputPropertyComponent
  ],
  // Sempre que um component novo for criado e ele tiver um módulo próprio ele
  // precisará ser declarado abaixo por questão de escopo de projeto.
  // Ex: imports: [..., MeuModuloModule]
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
