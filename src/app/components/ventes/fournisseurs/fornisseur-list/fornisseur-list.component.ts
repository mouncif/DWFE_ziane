import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Fournisseur} from '../../../../models/fournisseur';
import {FournisseurService} from '../../../../services/fournisseur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fornisseur-list',
  templateUrl: './fornisseur-list.component.html',
  styleUrls: ['./fornisseur-list.component.css']
})
export class FornisseurListComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllfournisseurs();
  }

  getAllfournisseurs() {
    this.fournisseurService.findAll().subscribe( response => {
      this.fournisseurs = response;
    });
  }

  edit(fournisseur: Fournisseur) {
    this.fournisseurService.populateForm(fournisseur);
    this.router.navigateByUrl('/fournisseurs/edit');
  }

  delete(fournisseur) {
    if (this.confimDelete()) {
      this.fournisseurService.delete(fournisseur.id)
        .subscribe(() => {
          this.getAllfournisseurs();
        });
    }
  }

  confimDelete() {
    return confirm('Do you want to delete this row ?');
  }

}
