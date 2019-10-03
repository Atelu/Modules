import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingExampleRoutingModule } from './routing-example-routing.module';
import { RoutingExampleComponent } from './routing-example.component';


@NgModule({
  declarations: [RoutingExampleComponent],
  imports: [
    CommonModule,
    RoutingExampleRoutingModule
  ]
})
export class RoutingExampleModule { }
