import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Mini App';

  constructor(private authService: AuthService) {}

  getAuthService(): AuthService {
    return this.authService;
  }

  ngOnInit() {
    this.authService.authStateChange.subscribe((loggedAtTrue) => {
      loggedAtTrue
        ? (this.pageTitle = `Bienvenido ${this.authService.getUserName()}`)
        : (this.pageTitle = 'Mini App');
    });

    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      parsedAuth.loggedIn
        ? (this.pageTitle = `Bienvenido ${this.authService.getUserName()}`)
        : (this.pageTitle = 'Mini App');
    }
  }
}
