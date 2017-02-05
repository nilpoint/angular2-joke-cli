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
});