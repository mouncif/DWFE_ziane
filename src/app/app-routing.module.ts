import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './components/ventes/clients/client-list/client-list.component';
import {ClientFormComponent} from './components/ventes/clients/client-form/client-form.component';
import {FornisseurListComponent} from './components/ventes/fournisseurs/fornisseur-list/fornisseur-list.component';
import {FornisseurFormComponent} from './components/ventes/fournisseurs/fornisseur-form/fornisseur-form.component';
import {ProduitListComponent} from './components/ventes/produits/produit-list/produit-list.component';
import {ProduitFormComponent} from './components/ventes/produits/produit-form/produit-form.component';
import {Page404Component} from './components/shared/page404/page404.component';


const routes: Routes = [
  { path: '', component: ClientListComponent},
  { path: 'clients/add', component: ClientFormComponent},
  { path: 'clients/edit', component: ClientFormComponent},
  { path: 'fournisseurs', component: FornisseurListComponent},
  { path: 'fournisseurs/add', component: FornisseurFormComponent},
  { path: 'fournisseurs/edit', component: FornisseurFormComponent},
  { path: 'produits', component: ProduitListComponent},
  { path: 'produits/add', component: ProduitFormComponent},
  { path: 'produits/edit', component: ProduitFormComponent},
  { path: '404', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
