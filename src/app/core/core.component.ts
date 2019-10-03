import { Component, OnInit, ViewChild } from '@angular/core';
import { BannerComponent} from './banner/banner.component';
import {SidebarComponent} from './sidebar/sidebar.component';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  @ViewChild(BannerComponent,  {static: false}) Banner: BannerComponent;
  @ViewChild(SidebarComponent,  {static: false}) Sidebar: SidebarComponent;

  showSidebar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showA() {
    console.log('Show A Has Been Clicked');
    // this.Sidebar.showMe();
    this.showSidebar = !this.showSidebar;

  }

  showB() {
    console.log('Show B Has Been Clicked');
    this.Banner.showMe();
  }
}
