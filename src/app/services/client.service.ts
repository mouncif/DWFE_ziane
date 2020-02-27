import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost:3000/clients';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    statut: new FormControl(''),
    photo: new FormControl(''),
    tel: new FormControl(''),
    email: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
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
    return this.http.get<Client[]>(this.url);
  }

  add(client: Client) {
    return this.http.post<Client>(this.url, client);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(client) {
    return this.http.put(`${this.url}/${client.id}`, client);
  }

  populateForm(client) {
    this.form.setValue(client);
  }
}
