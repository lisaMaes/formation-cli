import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  formations:Array<Formation> = [];

  isDisplay:boolean = true;
  isDisplay2:boolean = true;


  asyncPromise: any = new Promise(resolve => {
    setTimeout(() => resolve('Async data'), 1500);
  });

  keyValueObj : {key1 : string, key2 : string} = {
    key1 : 'Value 1',
    key2 : 'Value 2',
  }

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular','angular pour les nul',10.2,new Date('1995-12-17T03:24:00')),
      new Formation('Module JavaScript','JS du Js ouais!!!',56.25,new Date('1995-12-17T03:24:00'),new Date('1996-02-27T09:24:00')),
      new Formation('Module TypeScript', 'du js avec des type bou',456.2,new Date('1995-12-17T03:24:00')),
      new Formation('Php', ''),
      new Formation('JQuery', ''),
      new Formation('Bootstrap', ''),
      new Formation('Silex', ''),

    ]
  }

}
