import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full' },
  { path: 'crud/home', component: HomeComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update/:productId', component: UpdateComponent },
  { path: 'crud/details/:productId', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
