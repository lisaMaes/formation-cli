import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  isHidden:boolean =false;
  pouet:string= 'Coucou !';

  handleClick() {
    console.log('Le boutton a été cliqué');
  }

  handleClick2() {
    this.isHidden = !this.isHidden;
    if(this.pouet == 'Coucou !'){

      this.pouet = 'Caché !';
    }else{
      this.pouet = 'Coucou !';
    }

  }

  mouseOver(){
    console.log('mouseOver');
  }

  mouseOut(){
    console.log('mouseOut');
  }


  constructor() { }

  ngOnInit() {
  }

}
