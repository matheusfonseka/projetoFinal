import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import * as firebase from 'firebase';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-de-clientes',
  templateUrl: './lista-de-clientes.page.html',
  styleUrls: ['./lista-de-clientes.page.scss'],
})
export class ListaDeClientesPage implements OnInit {

  listaDeClientes : Cliente[] = [];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  constructor(public  activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    var ref = firebase.firestore().collection("cliente");
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Cliente();
            c.setDados(doc.data());
            c.id = doc.id;
            this.listaDeClientes.push(c);
        });
        console.log(this.listaDeClientes);
    });

  }

}
