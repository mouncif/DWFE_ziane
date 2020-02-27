import { Component, OnInit } from '@angular/core';
import {Fournisseur} from '../../../../models/fournisseur';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];

  constructor() { }

  ngOnInit() {
  }

}
