import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [Auth2Guard]
  },
  {
    path: 'logoff',
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]
  },
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },



  { path: 'instrucoes', loadChildren: './instrucoes/instrucoes.module#InstrucoesPageModule' },
  { path: 'ciencia', loadChildren: './ciencia/ciencia.module#CienciaPageModule' },  { path: 'treino', loadChildren: './treino/treino.module#TreinoPageModule' },
  { path: 'treino-corpo-inteiro', loadChildren: './treino-corpo-inteiro/treino-corpo-inteiro.module#TreinoCorpoInteiroPageModule' },
  { path: 'corpo-inteiro', loadChildren: './corpo-inteiro/corpo-inteiro.module#CorpoInteiroPageModule' },
  { path: 'visualizar-treino', loadChildren: './visualizar-treino/visualizar-treino.module#VisualizarTreinoPageModule' },
  { path: 'abdomens-treino', loadChildren: './abdomens-treino/abdomens-treino.module#AbdomensTreinoPageModule' },
  { path: 'braco-treino', loadChildren: './braco-treino/braco-treino.module#BracoTreinoPageModule' },
  { path: 'perna-treino', loadChildren: './perna-treino/perna-treino.module#PernaTreinoPageModule' },
  { path: 'gluteos-treino', loadChildren: './gluteos-treino/gluteos-treino.module#GluteosTreinoPageModule' },
  { path: 'treino-corpo-inteiro-instrucao', loadChildren: './treino-corpo-inteiro-instrucao/treino-corpo-inteiro-instrucao.module#TreinoCorpoInteiroInstrucaoPageModule' },
  { path: 'abdomens-treino-instrucao', loadChildren: './abdomens-treino-instrucao/abdomens-treino-instrucao.module#AbdomensTreinoInstrucaoPageModule' },
  { path: 'braco-treino-instrucao', loadChildren: './braco-treino-instrucao/braco-treino-instrucao.module#BracoTreinoInstrucaoPageModule' },
  { path: 'perna-treino-instrucao', loadChildren: './perna-treino-instrucao/perna-treino-instrucao.module#PernaTreinoInstrucaoPageModule' },
  { path: 'gluteos-treino-instrucao', loadChildren: './gluteos-treino-instrucao/gluteos-treino-instrucao.module#GluteosTreinoInstrucaoPageModule' },
  { path: 'imc', loadChildren: './imc/imc.module#ImcPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
