/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { UserService } from '../user-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: UserService;
  let element: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [UserService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    service = TestBed.get(UserService);

    // get the "a" element by CSS selector (e.g., by class name)
    element = fixture.debugElement.query(By.css('a'));
  });

  afterEach(() => {    
    component = null;
    service = null;
  });

  it('needsLogin returns true when user is not authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when user is authenticated', () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('login button is visible when the user is authenticated', () => {
    // We initially expect the text inside the a tag to be blank.
    // That’s because when Angular first loads no change detection has been 
    // triggered and therefore the view doesn’t show either the Login or Logout text.
    expect(element.nativeElement.textContent.trim()).toBe('');
    // Trigger change detection
    fixture.detectChanges();
    expect(element.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(element.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(element.nativeElement.textContent.trim()).toBe('Logout');
  });
});
