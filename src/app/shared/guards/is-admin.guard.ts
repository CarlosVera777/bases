import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WebService } from 'src/app/services/web.service';

// @Injectable({
//   providedIn: "root"
// })
// export class IsAdminGuard {
//   async canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Promise<boolean> {
//       //Aqui agregamos la logica si puede acceder o no puede acceder.
//       const is = await this.isAdmin();
//       return is;
//     }

//     isAdmin() {
//       return new Promise<boolean>((resolve, reject) => {
//         setTimeout(() => {
//           resolve(true);
//         }, 2000);
//       });
//     }
// }

export const IsAdminGuard: CanActivateFn = async (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  ) => {
    const webService = inject(WebService);
    //Aqui colocamos la logica
    // await true;
    return false;
  }

