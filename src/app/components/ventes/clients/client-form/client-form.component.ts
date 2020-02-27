import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addClient(client) {
    this.clientService.add(client)
      .subscribe((user) => {
        this.router.navigateByUrl('/');
      });
  }

  updateClient(client) {
    this.clientService.update(client)
      .subscribe((user) => {
        this.router.navigateByUrl('/');
      });
  }

  save() {
    if (this.clientService.form.valid) {
      if (!this.clientService.form.get('id').value) {
        this.addClient(this.clientService.form.value);
      } else {
        this.updateClient(this.clientService.form.value);
      }
      this.clientService.form.reset();
      this.clientService.initializeFormGroup();
      this.router.navigate(['/']);
    }
  }
}
