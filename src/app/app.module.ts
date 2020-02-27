import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partails/navbar/navbar.component';
import { MainComponent } from './components/layouts/main/main.component';
import { ProduitListComponent } from './components/ventes/produits/produit-list/produit-list.component';
import { ProduitFormComponent } from './components/ventes/produits/produit-form/produit-form.component';
import { FornisseurFormComponent } from './components/ventes/fournisseurs/fornisseur-form/fornisseur-form.component';
import { FornisseurListComponent } from './components/ventes/fournisseurs/fornisseur-list/fornisseur-list.component';
import { ClientFormComponent } from './components/ventes/clients/client-form/client-form.component';
import { ClientListComponent } from './components/ventes/clients/client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './components/admin/users/user-list/user-list.component';
import { UserFormComponent } from './components/admin/users/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProduitListComponent,
    ProduitFormComponent,
    FornisseurFormComponent,
    FornisseurListComponent,
    ClientFormComponent,
    ClientListComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
