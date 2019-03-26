import { Component, OnInit } from '@angular/core';
import {Formation }from '../model/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
  nom: string = 'Bewizyu';
  prenom: string ='Pouet Pouet';
  formation:Formation = new Formation('Diginamic','Formation Java/ANgular avec certif oracle');

  getFullName():string{
    return this.prenom + ' ' + this.nom;
  }

  constructor() { }
  ngOnInit() {
  }
}
