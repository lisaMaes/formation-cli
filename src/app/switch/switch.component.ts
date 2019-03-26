import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  formations:Array<Formation> = [];


  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular','angular pour les nul'),
      new Formation('Module JavaScript','JS du Js ouais!!!'),
      new Formation('Module TypeScript', 'du js avec des type bou'),
      new Formation('Php', ''),
      new Formation('JQuery', ''),
      new Formation('Bootstrap', ''),
      new Formation('Silex', ''),

    ]
  }


}
