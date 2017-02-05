/* tslint:disable:no-unused-variable */
import { LoginComponent } from './login.component';
import { UserService } from '../user-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService;
  let spy: any;

  beforeEach(() => {
    service = new UserService();
    component = new LoginComponent(service);
  });

  afterEach(() => {    
    component = null;
    service = null;
  });

  it('needsLogin returns true when user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when user is authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});
