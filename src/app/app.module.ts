import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
