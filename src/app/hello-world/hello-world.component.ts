import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input() title: string;
  @Input() rname: string;
  @Input() occupation: string;
  @Input() location: string;
  @Input() first: string;
  @Output() display = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  showInfo() {
    this.display.emit(`Name: ${this.rname}
    Occupation: ${this.occupation}
    Based In: ${this.location}
    First Appearance: ${this.first}`);
  }

}
