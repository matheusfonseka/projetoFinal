import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }

  Ciencia() {
    this.router.navigate(['/ciencia']);
  }

  TreinoCorpoInteiro() {
    this.router.navigate(['/treino-corpo-inteiro']);
  }

  AbdomensTreino() {
    this.router.navigate(['/abdomens-treino']);
  }

  BracoTreino() {
    this.router.navigate(['/braco-treino']);
  }

  PernaTreino() {
    this.router.navigate(['/perna-treino']);
  }

  GluteosTreino() {
    this.router.navigate(['/gluteos-treino']);
  }

  Imc() {
    this.router.navigate(['/imc']);
  }

}
