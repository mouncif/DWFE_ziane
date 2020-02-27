import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Produit} from '../../../../models/produit';
import {Router} from '@angular/router';
import {ProduitService} from '../../../../services/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[any] = [];

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {
    this.getAllProduits();
  }

  ngOnInit() {
    this.getAllProduits();
  }

  getAllProduits() {
    this.produitService.findAll().subscribe( response => {
      this.produits = response;
    });
  }

  edit(produit: Produit) {
    this.produitService.populateForm(produit);
    this.router.navigateByUrl('/produits/edit');
  }

  delete(produit) {
    if (this.confimDelete()) {
      this.produitService.delete(produit.id)
        .subscribe(() => {
          this.getAllProduits();
        });
    }
  }

  confimDelete() {
    return confirm('Do you want to delete this row ?');
  }

}
