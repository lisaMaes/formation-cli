import { Component, OnInit } from '@angular/core';
import {Formation} from'../model/Formation';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  isDisplay:boolean = true;
  isDisplay2:boolean = true;

  formation:Formation = new Formation('Diginamic','Formation Java/ANgular avec certif oracle');


  handleClick(){
    this.isDisplay2 = !this.isDisplay2;

  }


  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.isDisplay = !this.isDisplay;
    }, 1000)
  }
}
