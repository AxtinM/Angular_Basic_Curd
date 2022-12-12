import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudModule } from './crud/crud.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './AuthInterceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CrudModule,
    RouterModule,
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
