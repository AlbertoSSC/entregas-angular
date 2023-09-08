import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatDividerModule } from '@angular/material/divider';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPublicComponent } from './components/layout/header-public/header-public.component';
import { HeaderPrivateComponent } from './components/layout/header-private/header-private.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuPublicComponent } from './components/layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './components/layout/menu-private/menu-private.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { CrudComponent } from './components/pages/crud/crud.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RotateDirective } from './components/directives/rotate.directive';
import { LoginDialogElement } from './components/custom-angular-elements/login-dialog-element';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
    RotateDirective,
    LoginDialogElement,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    FormsModule,
    MatInputModule,
    MatButtonModule,

    MatMenuModule,
    MatDividerModule,

    MatDialogModule,

    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
