import { Component, OnInit } from '@angular/core';

import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private auth: UserService) { }

  ngOnInit() {
    this.auth.isAuthenticatedWithPromise().then((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }

  needsLogin(): boolean{
    return !this.auth.isAuthenticated();
  }

}
