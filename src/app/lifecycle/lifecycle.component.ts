import {Component, OnInit, Output} from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  formation:Formation = new Formation('NOM_ANGULAR', 'test');

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.formation = new Formation(this.formation.name === 'NOM_ANGULAR' ? 'NOM_JS' : 'NOM_ANGULAR', "test");
    }, 1000)
  }



}
