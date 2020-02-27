import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../../../services/produit.service';
import {FournisseurService} from '../../../../services/fournisseur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addproduit(produit) {
    this.produitService.add(produit)
      .subscribe((user) => {
        this.router.navigateByUrl('/produits');
      });
  }

  updateproduit(produit) {
    this.produitService.update(produit)
      .subscribe((user) => {
        this.router.navigateByUrl('/produits');
      });
  }

  save() {
    console.log('test');
    if (this.produitService.form.valid) {
      if (!this.produitService.form.get('id').value) {
        this.addproduit(this.produitService.form.value);
      } else {
        this.updateproduit(this.produitService.form.value);
      }
      this.produitService.form.reset();
      this.produitService.initializeFormGroup();
      this.router.navigate(['/produits']);
    }
  }

}
