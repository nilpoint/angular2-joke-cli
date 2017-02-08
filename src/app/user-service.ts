export class UserService {
  isLoggin(): boolean{
    return true;
  }

  isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
  }

  isAuthenticatedWithPromise(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }
}
