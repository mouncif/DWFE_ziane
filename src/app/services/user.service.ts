import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
// @ts-ignore
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/users';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    profile: new FormControl(''),
    email: new FormControl(''),
    statut: new FormControl(''),
    photo: new FormControl(''),
    dateCreation: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom: '',
      profile: '',
      email: '',
      statut: '',
      photo: '',
      dateCreation: null,
    });
  }

  findAll() {
    return this.http.get<User[]>(this.url);
  }

  add(user: User) {
    return this.http.post<User>(this.url, user);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(user) {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateForm(user) {
    this.form.setValue(user);
  }
}
