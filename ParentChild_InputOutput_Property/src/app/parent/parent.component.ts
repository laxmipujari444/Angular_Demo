import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childMessage = "";
 
  message: string;
  parentMessage="";
  constructor() {this.message=''; }

  ngOnInit() {
    
  }

sendMsg(){
this.childMessage=this.message;
}
  

  receiveMessage($event: string) {
    this.parentMessage = $event
    
  }
}