import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  Value: any;
  public dataSource: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.Value = JSON.parse(activatedRoute.snapshot.params["value"]);
    console.log('value', this.Value);
   
  }



  ngOnInit(): void {
  }

}
