import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: String;
  public subTitle: String;
  public email: String;
  constructor() { 
    this.title = "Luis Fernando";
    this.subTitle = "Desarrollador Web";
    this.email ="email@gmail.com"
  }

  ngOnInit() {
  }

}
