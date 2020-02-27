import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './components/ventes/clients/client-list/client-list.component';
import {ClientFormComponent} from './components/ventes/clients/client-form/client-form.component';
import {FornisseurListComponent} from './components/ventes/fournisseurs/fornisseur-list/fornisseur-list.component';
import {FornisseurFormComponent} from './components/ventes/fournisseurs/fornisseur-form/fornisseur-form.component';


const routes: Routes = [
  { path: '', component: ClientListComponent},
  { path: 'clients/add', component: ClientFormComponent},
  { path: 'clients/edit', component: ClientFormComponent},
  { path: 'fournisseurs', component: FornisseurListComponent},
  { path: 'fournisseurs/add', component: FornisseurFormComponent},
  { path: 'fournisseurs/edit', component: FornisseurFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
