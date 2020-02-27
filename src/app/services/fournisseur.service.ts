import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Fournisseur} from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private url = 'http://localhost:3000/fournisseurs';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    nomCourt: new FormControl(''),
    ville: new FormControl(''),
    adresse: new FormControl(''),
    telFix: new FormControl(''),
    telMobile: new FormControl(''),
    telFax: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      prenom: '',
      statut: '',
      photo: '',
      tel: '',
      email: '',
      adresse: '',
      ville: '',
    });
  }

  findAll() {
    return this.http.get<Fournisseur[]>(this.url);
  }

  add(fournisseur: Fournisseur) {
    return this.http.post<Fournisseur>(this.url, fournisseur);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(fournisseur) {
    return this.http.put(`${this.url}/${fournisseur.id}`, fournisseur);
  }

  populateForm(fournisseur) {
    this.form.setValue(fournisseur);
  }
}
