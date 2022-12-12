import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrudModule } from './crud/crud.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './AuthInterceptor';
import { LocalStorageService } from './localStorage.service';
import { JWTTokenService } from './token.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CrudModule,
    RouterModule,
  ],
  providers: [
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LocalStorageService,
    JWTTokenService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
