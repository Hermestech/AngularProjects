import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault:string = './assets/images/default.png';
  counter = 0;
  counterFunction: number | undefined;

  constructor() {
    //before render
    //aquí no debemos async
    console.log('constructor', 'imgValue => ', this.img);
  }

  ngOnChanges(){
    //before render - while render
     //actualizar cambios en inputs
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //before render
    //aquí podemos hacer fetch - async
    console.log('ngOnInit', 'imgValue =>', this.img);

    // this.counterFunction = window.setInterval(() => {
    //   this.counter++;
    //   console.log('counter', this.counter);
    // }, 1000);
  }

  ngAfterViewInit(){
    //after render
    //handler children
    console.log('ngAfterInit');
  }

  ngOnDestroy(){
    //delete render
    // window.clearInterval(this.counterFunction);
  }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
