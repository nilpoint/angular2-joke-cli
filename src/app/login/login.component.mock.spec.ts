/* tslint:disable:no-unused-variable */
import { LoginComponent } from './login.component';
import { UserService } from '../user-service';

/**
 * MockUserService
 */
class MockUserService extends UserService {
  authenticated: boolean = false;

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: MockUserService;

  beforeEach(() => {
    service = new MockUserService();
    component = new LoginComponent(service);
  });

  afterEach(() => {    
    component = null;
    service = null;
  });

  it('needsLogin returns true when user is not authenticated', () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false when user is authenticated', () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});
