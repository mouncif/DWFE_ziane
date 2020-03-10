import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// @ts-ignore
import {User} from '../../../../models/user';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllusers();
  }

  getAllusers() {
    this.userService.findAll().subscribe( response => {
      this.users = response;
    });
  }

  edit(user: User) {
    this.userService.populateForm(user);
    this.router.navigateByUrl('/users/edit');
  }

  delete(user) {
    if (this.confimDelete()) {
      this.userService.delete(user.id)
        .subscribe(() => {
          this.getAllusers();
        });
    }
  }

  confimDelete() {
    return confirm('Do you want to delete this row ?');
  }
}
