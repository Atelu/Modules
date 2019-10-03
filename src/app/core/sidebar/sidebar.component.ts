import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // @ViewChild('commandbarSidenav', { static: true })
  // public sidenav: MatSidenav;
  // @Input() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
showMe() {
    console.log('Show me in component A');
}
}
