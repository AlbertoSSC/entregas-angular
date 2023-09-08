import { Injectable, EventEmitter } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private username = '';
  authStateChange = new EventEmitter<boolean>();

  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      this.loggedIn = parsedAuth.loggedIn;
      this.username = parsedAuth.username;
    }
  }

  setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<boolean> {
    if (username === 'master@lemoncode.net' && password === '123456') {
      this.loggedIn = true;
      this.username = username;
      localStorage.setItem(
        'auth',
        JSON.stringify({ loggedIn: this.loggedIn, username: this.username })
      );

      this.authStateChange.emit(true);

      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  logout() {
    this.loggedIn = false;
    this.username = '';
    this.authStateChange.emit(false);
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUserName(): string {
    return this.username;
  }
}
