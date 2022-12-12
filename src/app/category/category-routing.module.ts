import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../authGuard.service';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent, canActivate: [AuthorizeGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthorizeGuard] },
  {
    path: ':categoryId',
    component: DetailsComponent,
    canActivate: [AuthorizeGuard],
  },
  {
    path: 'update/:categoryId',
    component: UpdateComponent,
    canActivate: [AuthorizeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
