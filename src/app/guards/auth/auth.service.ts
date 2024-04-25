import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CognitoService } from '../../services/cognito/cognito.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router: Router, private _cognito: CognitoService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let loggedInStatus: boolean = await this._cognito.UserLoggedIn();

    if (loggedInStatus) {
      return true;
    } else {
      this._router.navigate(['/auth']);
      return false;
    }
  }
}
