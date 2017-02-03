import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SearchComponent } from './search/search.component';

export class UnsearchedTermGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(component: SearchComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log("UnsearchedTermGuard");
    console.log(route.params);
    console.log(state.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
}
