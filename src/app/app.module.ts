import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebCamComponent } from 'ack-angular-webcam/webcam.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'camera', component: CameraComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CameraComponent,
    WebCamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
