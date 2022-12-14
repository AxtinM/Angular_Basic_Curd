import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from './AuthInterceptor';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./crud/crud.module').then((res) => res.CrudModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((res) => res.CategoryModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((res) => res.AuthModule),
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
