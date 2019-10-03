import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreComponent} from './core.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {core} from '@angular/compiler';
import {RoutingExampleComponent} from './routing-example/routing-example.component';
import {ParentComponent} from './component-interaction/parent/parent.component';
import {ConsultationComponent} from './consultation/consultation.component';

const coreroutes: Routes = [

  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'routing-example',
        component: RoutingExampleComponent,
      },
      {
        path: 'component-interaction',
        component: ParentComponent,
      },
      {
        path: 'consultation',
        component: ConsultationComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(coreroutes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
