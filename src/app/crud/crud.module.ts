import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [HomeComponent, CreateComponent, UpdateComponent, DetailsComponent],
  imports: [CommonModule, CrudRoutingModule, RouterModule],
})
export class CrudModule {}
