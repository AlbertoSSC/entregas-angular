import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dialog: MatDialog, private authService: AuthService) {
    this.dialog.closeAll();
  }
  userName = this.authService.getUserName();
}
