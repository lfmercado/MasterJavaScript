import { Component, OnInit, Input } from '@angular/core';
declare var $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() width:number;
  constructor() { }

  ngOnInit() {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.width
    });
    console.log(this.width);

  }

}
