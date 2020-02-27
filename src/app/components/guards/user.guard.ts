import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!this.auth.authRole() == 'user') {
      this.router.navigate(['/404']);
      return false;
    }
    return true;
  }
}
