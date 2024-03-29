import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-curso-detalhe",
  templateUrl: "./curso-detalhe.component.html",
  styleUrls: ["./curso-detalhe.component.css"]
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: string;
  inscricao: Subscription;
  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
  }

  // Atribuimos nossa inscrição a uma variável.
  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  // Quando for destruído, nos desinscrevemos para poupar recursos.
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
