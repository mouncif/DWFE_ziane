import { Component, OnInit } from '@angular/core';
import {FournisseurService} from '../../../../services/fournisseur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fornisseur-form',
  templateUrl: './fornisseur-form.component.html',
  styleUrls: ['./fornisseur-form.component.css']
})
export class FornisseurFormComponent implements OnInit {

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addfournisseur(fournisseur) {
    this.fournisseurService.add(fournisseur)
      .subscribe((user) => {
        this.router.navigateByUrl('/fournisseurs');
      });
  }

  updatefournisseur(fournisseur) {
    this.fournisseurService.update(fournisseur)
      .subscribe((user) => {
        this.router.navigateByUrl('/fournisseurs');
      });
  }

  save() {
    console.log('test');
    if (this.fournisseurService.form.valid) {
      if (!this.fournisseurService.form.get('id').value) {
        this.addfournisseur(this.fournisseurService.form.value);
      } else {
        this.updatefournisseur(this.fournisseurService.form.value);
      }
      this.fournisseurService.form.reset();
      this.fournisseurService.initializeFormGroup();
      this.router.navigate(['/fournisseurs']);
    }
  }

}
