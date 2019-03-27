import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  @Input()
  formation:Formation;

  @Output()
  formationSelected:EventEmitter<Formation> = new EventEmitter<Formation>();
  @Output()
  formationClicked2:EventEmitter<Formation> = new EventEmitter<Formation>();

  selectFormation() {

    this.formationSelected.emit(this.formation);
  }

  selectClick2() {

    this.formationClicked2.emit(this.formation);
  }

  constructor() { }

  ngOnInit() {
  }

}
