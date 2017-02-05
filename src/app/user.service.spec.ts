import { UserService } from './user-service';

describe('Service: User', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    // No token is set here and the token is already cleared in afterEach()
    expect(service.isAuthenticated()).toBeFalsy();
  });
});