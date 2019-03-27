import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  formations:Array<Formation> = [];

  handleFormationSelected(formation) {

    console.log('Formation selected', formation);
  }


  handleFormationClicked2(formation) {
      alert(formation.name);
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
