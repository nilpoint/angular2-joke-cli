export class UserService {
  isLoggin(): boolean{
    return true;
  }

  isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
  }
}
