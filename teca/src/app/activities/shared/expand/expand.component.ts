import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
})
export class ExpandComponent implements OnInit {

  isActivo = false;
  constructor() { }

  ngOnInit() {}
  
  Ampliar(){
    if(this.isActivo){
      var p = document.getElementById("principal");
      p.style.width = ""
      p.style.height = ""
      var r = document.getElementById("row-A");
      r.style.width = ""
      r.style.height = ""
      this.isActivo = false;
    }else{
      var p = document.getElementById("principal");
      p.style.width = "100%"
      p.style.height = "100%"
      var r = document.getElementById("row-A");
      r.style.width = "100%"
      r.style.height = "100%"
      this.isActivo = true;
    }
  }

}
