import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {User} from '../../../../models/user';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addUser(user) {
    this.userService.add(user)
      .subscribe((user) => {
        this.router.navigateByUrl('/');
      });
  }

  updateUser(user) {
    this.userService.update(user)
      .subscribe((user) => {
        this.router.navigateByUrl('/');
      });
  }

  save() {
    if (this.userService.form.valid) {
      if (!this.userService.form.get('id').value) {
        this.addUser(this.userService.form.value);
      } else {
        this.updateUser(this.userService.form.value);
      }
      this.userService.form.reset();
      this.userService.initializeFormGroup();
      this.router.navigate(['/users']);
    }
  }
}
