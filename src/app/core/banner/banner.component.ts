import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<any>();
  // SideNavShow = new EventEmitter();
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  showMe() {
    console.log( 'Show me in component B');
  }
showSideNav() {
this.toggleSidenav.emit();
}
}
