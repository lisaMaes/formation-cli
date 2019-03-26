import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';
@Component({
  selector: 'app-interpolate-optional',
  templateUrl: './interpolate-optional.component.html',
  styleUrls: ['./interpolate-optional.component.css']
})
export class InterpolateOptionalComponent implements OnInit {
  nom:string= 'Bewizyu'

  formationAngular:string= 'Module angular';

  formation:Formation = new Formation('Module Angular','tralalal');

  formationJS:Formation;

  getTitle() :string {
    return `Function: ${this.nom} => ${this.formationAngular} `
  }

  constructor() { }
  ngOnInit(){
    setTimeout(() => {
      this.formationJS= new Formation('Module JavaScript', 'tsoin tsoin');
    }, 3000)
  }
}
