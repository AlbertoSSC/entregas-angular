import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogElement } from '../../custom-angular-elements/login-dialog-element';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  onSubmit() {
    this.authService.setLoading(true);

    this.authService.login(this.formData).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/dashboard']);
          console.log('Login Success');
        } else {
          console.log('Login Failed');
        }
      },
      error: (error) => console.error(error),
      complete: () => {
        this.authService.setLoading(false);
      },
    });
  }

  openDialog() {
    this.dialog.open(LoginDialogElement);
  }

  onDestroy() {
    this.dialog.closeAll();
  }
}
