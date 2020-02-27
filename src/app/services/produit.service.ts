import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
// @ts-ignore
import {Produit} from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = 'http://localhost:3000/produits';

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    nomCourt: new FormControl(''),
    prixBase: new FormControl(''),
    prixVente: new FormControl(''),
    maxRemise: new FormControl(''),
    unite: new FormControl(''),
    image: new FormControl(''),
    qteInitial: new FormControl(''),
    qteActuel: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: '',
      nom: '',
      nomCourt: '',
      prixBase: '',
      prixVente: '',
      maxRemise: '',
      unite: '',
      image: '',
      qteInitial: '',
      qteActuel: '',
    });
  }

  findAll() {
    return this.http.get<Produit[]>(this.url);
  }

  add(produit: Produit) {
    return this.http.post<Produit>(this.url, produit);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(produit) {
    return this.http.put(`${this.url}/${produit.id}`, produit);
  }

  populateForm(produit) {
    this.form.setValue(produit);
  }
}
