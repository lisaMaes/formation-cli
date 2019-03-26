import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';
@Component({
  selector: 'app-interpolate-extend',
  templateUrl: './interpolate-extend.component.html',
  styleUrls: ['./interpolate-extend.component.css']
})
export class InterpolateExtendComponent implements OnInit {
  nom:string= 'Bewizyu';
  prenom: string = 'pouet pouet';
  formationAngular:string= 'Module angular';
  formation:Formation = new Formation('Module Angular', "vlavlaval");
  getTitle() :string {
    return `Function: ${this.nom} => ${this.formationAngular} `
  }
  constructor() { }
  ngOnInit() {
  }
}
