import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core/core.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CoreComponent,
  // },
  {
    path: '**',
    component: CoreComponent,
  }

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
