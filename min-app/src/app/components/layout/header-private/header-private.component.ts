import { Component } from '@angular/core';
import { AuthService } from 'src/app/components/services/auth.service';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.scss'],
})
export class HeaderPrivateComponent {
  constructor(private authService: AuthService) {}

  getAuthService(): string {
    return this.authService.getUserName();
  }

  userLogout() {
    this.authService.logout();
    localStorage.clear();
  }
}
