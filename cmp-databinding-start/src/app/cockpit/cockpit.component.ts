import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';
  @ViewChild('ServerContentInput')  ServerContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(name) {
    // console.log(this.ServerContentInput);
    this.serverCreated.emit({
      serverName: name.value, 
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }

  onAddBlueprint(name) {
    // console.log(this.ServerContentInput);
    this.serverCreated.emit({
      serverName: name.value, 
      serverContent: this.ServerContentInput.nativeElement.value
    });
  }

}
