import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';
@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  formations:Array<Formation> = [];

  constructor() { }

  getColorByElement(isFirst:boolean = false) {
    return isFirst ? 'red' : 'black';
  }

  getColorByElement2(isFirst:boolean = false, isLast:boolean = false, isEven:boolean = false):string {

    let colorElement:string = '';

    if(isFirst){

      colorElement = 'Crimson';

    }else if(isLast){

      colorElement = 'LimeGreen';

    }else if(isEven == true && isFirst == false && isLast == false){

      colorElement = 'MediumSlateBlue';
    }else{
      colorElement = 'black';

    }


    return colorElement;
  }

  getBckg(isEven:boolean = false):string{

    let colorElement:string = '';

    if(isEven){

      colorElement = 'Silver';
    }else{
      colorElement = 'white';

    }
    return colorElement;
  }


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
