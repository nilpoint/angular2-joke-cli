/* tslint:disable:no-unused-variable */
import { LoginComponent } from './login.component';
import { UserService } from '../user-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    component = null;
    service = null;
  });

  it('needsLogin returns true when user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false when user is authenticated', () => {
    localStorage.setItem('token', '1234');
    expect(component.needsLogin()).toBeFalsy();
  });
});
