import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../services/client.service';
// @ts-ignore
import {Client} from '../../../../models/client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.findAll().subscribe( response => {
      this.clients = response;
    });
  }

  edit(client: Client) {
    this.clientService.populateForm(client);
    this.router.navigateByUrl('/clients/edit');
  }

  delete(client) {
    if (this.confimDelete()) {
      this.clientService.delete(client.id)
        .subscribe(() => {
          this.getAllClients();
        });
    }
  }

  confimDelete() {
    return confirm('Do you want to delete this row ?');
  }
}
