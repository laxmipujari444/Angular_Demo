import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  parentMessage: string;
  constructor() { this.childMessage='';
this.parentMessage='';}
  
  ngOnInit() {
    
  }

  sendMsgToTeacher() {
    this.messageEvent.emit(this.parentMessage)
  }
}