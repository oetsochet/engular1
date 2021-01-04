import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fail } from 'assert';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  dis = "unset";
  fabars() {
    console.log("method alert");


  }
  // mode = "dark";
  // onChengeMoed() {
  //   if (this.mode == 'light') {
  //     this.mode = 'dark';
  //   }
  //   else {
  //     this.mode = 'light';
  //   }
  // }
}
