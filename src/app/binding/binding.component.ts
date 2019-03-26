import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  isHidden:boolean= true;
  color:string = 'Crimson';


  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      this.isHidden = !this.isHidden;
    }, 2000);
    setInterval(() =>{
      if(this.color == 'Crimson'){
        this.color = 'LimeGreen';
      }else{
        this.color= 'Crimson';
      }
    }, 1000);

  }


}
