import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-dialog-elements',
  templateUrl: 'login-dialog-element.html',
  styleUrls: ['./login-dialog-element.scss'],
})
export class LoginDialogElement implements OnInit {
  loading$!: Observable<boolean>;

  constructor(private authServices: AuthService) {}

  ngOnInit() {
    this.loading$ = this.authServices.getLoading();
  }
}
