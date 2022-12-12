import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LocalStorageService } from './localStorage.service';
import { JWTTokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private authStorageService: LocalStorageService,
    private jwtService: JWTTokenService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.authStorageService.get('id_token');
    this.jwtService.setToken(token);
    if (this.jwtService) {
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
