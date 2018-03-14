import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  //encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type:string, name: string, content: string};

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("onDestroy")
  }


}