import { CanActivateChild } from '@angular/router';

export class AlwaysAuthChildrenGuard implements CanActivateChild {
  canActivateChild(){
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }
}
