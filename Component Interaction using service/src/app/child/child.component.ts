import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(){
    this._interactionService.teacherMessage$.subscribe(
      message =>{
        if(message == 'Good Morning'){
          alert('Reply from Student:    Good Morning Teacher');
        }else if(message == 'Well Done'){
          alert('Reply from Student:    Thank you teacher');
        }
      }
    );
  }

}
