import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider:number;
  public anchuraSlider: number;

  constructor() {
    
   }

  ngOnInit() {
  
  }
  cargarSlider(){
    this.anchuraSlider= this.widthSlider;
  }
  resetSlider(){
    this.anchuraSlider =null;
  }
}
 