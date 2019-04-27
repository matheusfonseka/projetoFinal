import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.page.html',
  styleUrls: ['./cliente-view.page.scss'],
})
export class ClienteViewPage implements OnInit {
  
  cliente : Cliente = new Cliente();
  id : string;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};

  formGroup : FormGroup; // <----

  constructor(public  activatedRoute: ActivatedRoute, 
    public formBuilder : FormBuilder,
    public router : Router,
    public nav : NavController) {// <----
      this.id = this.activatedRoute.snapshot.paramMap.get('cliente');
      this.form(); // <----
  }

  form(){// <----
    this.formGroup = this.formBuilder.group({
      nome : [this.cliente.nome],
      telefone : [this.cliente.telefone],
      email : [this.cliente.email],
    });
  }

  ngOnInit() {
    this.obterCliente();
  }

  obterCliente(){
    var ref = firebase.firestore().collection("cliente").doc(this.id);
  
    ref.get().then(doc => {
        this.cliente.setDados(doc.data());
        this.form();
        
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
  }

  atualizar(){
    let ref = this.firestore.collection('cliente')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        console.log('Atualizado com sucesso');
        this.nav.navigateRoot('/lista-de-clientes');
      }).catch(()=>{
        console.log('Erro ao Atualizar');
      })
  }

}
